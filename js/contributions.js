const GITHUB_USER = 'jholaj';

// descriptions for repos that don't have one set on GitHub
const descriptionOverrides = {
  'Coffei/webshare-stremio-addon': 'Stremio addon for streaming from Webshare.cz',
};

// snapshot used when the GitHub API is unavailable (rate limit, offline...)
const contributionsFallback = [
  { repo: 'pydicom/pydicom', desc: 'Read, modify and write DICOM files with python code', title: 'Reduce peak memory usage in `apply_windowing`', url: 'https://github.com/pydicom/pydicom/pull/2315', status: 'open' },
  { repo: 'pika/pika', desc: 'Pure Python RabbitMQ/AMQP 0-9-1 client library', title: 'Bound work queues in `ThreadSafe*` adapters', url: 'https://github.com/pika/pika/pull/1651', status: 'open' },
  { repo: 'a-parida12/pdf2dcm', desc: 'Python Package for PDF to DICOM Conversion', title: 'Remove deprecated pydicom 3 attributes', url: 'https://github.com/a-parida12/pdf2dcm/pull/84', status: 'merged' },
  { repo: 'Coffei/webshare-stremio-addon', desc: descriptionOverrides['Coffei/webshare-stremio-addon'], title: 'Fix getUrl error handling and small cleanups', url: 'https://github.com/Coffei/webshare-stremio-addon/pull/39', status: 'merged' },
];

function renderContributions(contributions) {
  const container = document.getElementById('contrib-container');
  container.innerHTML = '';

  contributions.forEach(c => {
    const item = document.createElement('div');
    item.classList.add('contrib');

    const header = document.createElement('div');
    header.classList.add('contrib-header');

    const repoLink = document.createElement('a');
    repoLink.classList.add('contrib-repo');
    repoLink.href = 'https://github.com/' + c.repo;
    repoLink.target = '_blank';
    repoLink.textContent = c.repo;

    const status = document.createElement('span');
    status.classList.add('contrib-status', c.status);
    status.textContent = '[' + c.status + ']';

    header.appendChild(repoLink);
    header.appendChild(status);
    item.appendChild(header);

    if (c.desc) {
      const desc = document.createElement('p');
      desc.classList.add('contrib-desc');
      desc.textContent = c.desc;
      item.appendChild(desc);
    }

    const prLink = document.createElement('a');
    prLink.classList.add('contrib-title');
    prLink.href = c.url;
    prLink.target = '_blank';
    prLink.textContent = '↳ ' + c.title.replace(/`/g, '');
    item.appendChild(prLink);

    container.appendChild(item);
  });
}

function fetchRepoDescriptions(contributions) {
  const repos = [...new Set(contributions.map(c => c.repo))];
  return Promise.allSettled(
    repos.map(repo =>
      fetch('https://api.github.com/repos/' + repo)
        .then(r => r.ok ? r.json() : null)
        .then(data => ({ repo: repo, desc: data && data.description }))
    )
  ).then(results => {
    const descs = {};
    results.forEach(r => {
      if (r.status === 'fulfilled' && r.value) {
        descs[r.value.repo] = r.value.desc || descriptionOverrides[r.value.repo];
      }
    });
    contributions.forEach(c => {
      c.desc = descs[c.repo] || descriptionOverrides[c.repo];
    });
    return contributions;
  });
}

function loadContributions() {
  fetch('https://api.github.com/search/issues?q=author:' + GITHUB_USER + '+type:pr&per_page=100&sort=created&order=desc')
    .then(response => {
      if (!response.ok) throw new Error('GitHub API: ' + response.status);
      return response.json();
    })
    .then(data => {
      const contributions = data.items
        .map(item => ({
          repo: item.repository_url.split('/').slice(-2).join('/'),
          title: item.title,
          url: item.html_url,
          status: item.pull_request.merged_at ? 'merged' : item.state,
        }))
        // only PRs to other people's repos; skip closed-unmerged ones
        .filter(c => !c.repo.startsWith(GITHUB_USER + '/') && c.status !== 'closed');

      if (!contributions.length) throw new Error('no contributions returned');
      return fetchRepoDescriptions(contributions);
    })
    .then(renderContributions)
    .catch(() => renderContributions(contributionsFallback));
}

document.addEventListener('DOMContentLoaded', loadContributions);
