const GITHUB_USER = 'jholaj';

// descriptions for repos that don't have one set on GitHub
const descriptionOverrides = {
  'Coffei/webshare-stremio-addon': 'Stremio addon for streaming from Webshare.cz',
};

// snapshot used when the GitHub API is unavailable (rate limit, offline...)
const contributionsFallback = [
  { repo: 'pika/pika', desc: 'Pure Python RabbitMQ/AMQP 0-9-1 client library', title: 'Stop `StreamLostError` from hiding the original traceback', url: 'https://github.com/pika/pika/pull/1703', status: 'merged' },
  { repo: 'Bogdanp/dramatiq', desc: 'A fast and reliable background task processing library for Python 3.', title: 'Share a single connection across all RabbitMQ consumers', url: 'https://github.com/Bogdanp/dramatiq/pull/883', status: 'open' },
  { repo: 'pika/pika', desc: 'Pure Python RabbitMQ/AMQP 0-9-1 client library', title: 'Bound work queues in `ThreadSafe*` adapters.', url: 'https://github.com/pika/pika/pull/1651', status: 'merged' },
  { repo: 'a-parida12/pdf2dcm', desc: 'Python Package for PDF to DICOM Conversion', title: 'Remove Dataset.is_little_endian/is_implicit_VR deprecated in pydicom 3', url: 'https://github.com/a-parida12/pdf2dcm/pull/84', status: 'merged' },
  { repo: 'Coffei/webshare-stremio-addon', desc: descriptionOverrides['Coffei/webshare-stremio-addon'], title: 'Fix getUrl error handling and small cleanups', url: 'https://github.com/Coffei/webshare-stremio-addon/pull/39', status: 'merged' },
  { repo: 'pydicom/pydicom', desc: 'Read, modify and write DICOM files with python code', title: 'Reduce peak memory usage in `apply_windowing`', url: 'https://github.com/pydicom/pydicom/pull/2315', status: 'open' },
];

// one entry per repo with all its PRs, ordered by the repo's newest PR
function groupByRepo(contributions) {
  const groups = new Map();
  contributions.forEach(c => {
    if (!groups.has(c.repo)) groups.set(c.repo, { repo: c.repo, desc: c.desc, prs: [] });
    groups.get(c.repo).prs.push(c);
  });
  return [...groups.values()];
}

function renderContributions(contributions) {
  const container = document.getElementById('contrib-container');
  container.innerHTML = '';

  groupByRepo(contributions).forEach(group => {
    const item = document.createElement('div');
    item.classList.add('contrib');

    const header = document.createElement('div');
    header.classList.add('contrib-header');

    const repoLink = document.createElement('a');
    repoLink.classList.add('contrib-repo');
    repoLink.href = 'https://github.com/' + group.repo;
    repoLink.target = '_blank';
    repoLink.textContent = group.repo;

    header.appendChild(repoLink);
    item.appendChild(header);

    if (group.desc) {
      const desc = document.createElement('p');
      desc.classList.add('contrib-desc');
      desc.textContent = group.desc;
      item.appendChild(desc);
    }

    group.prs.forEach(c => {
      const pr = document.createElement('div');
      pr.classList.add('contrib-pr');

      const prLink = document.createElement('a');
      prLink.classList.add('contrib-title');
      prLink.href = c.url;
      prLink.target = '_blank';
      prLink.textContent = '↳ ' + c.title.replace(/`/g, '');

      const status = document.createElement('span');
      status.classList.add('contrib-status', c.status);
      status.textContent = '[' + c.status + ']';

      pr.appendChild(prLink);
      pr.appendChild(status);
      item.appendChild(pr);
    });

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
      // the repo API has its own rate limit; fall back to the snapshot's description
      const snapshot = contributionsFallback.find(f => f.repo === c.repo);
      c.desc = descs[c.repo] || descriptionOverrides[c.repo] || (snapshot && snapshot.desc);
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
