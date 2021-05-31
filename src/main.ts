import * as core from '@actions/core';
import * as github from '@actions/github';

const { owner } = github.context.repo;
const { repo } = github.context.repo;

const run = async function (): Promise<void> {
  try {
    const tag: string = core.getInput('tag');

    core.info(`Tag is: ${tag}`);
    core.info('Setting up Octokit');
    const token: string = core.getInput('token');
    const octokit = github.getOctokit(token);

    core.info(`Searching release by tag: ${tag}`);
    let dat1;

    try {
      dat1 = await octokit.rest.repos.getReleaseByTag({ owner, repo, tag });
    } catch (ex: any) {
      // No release found is a good thing
      core.debug(ex.message);
    }
    core.debug(JSON.stringify(dat1));
    if (dat1 !== undefined) {
      core.info('Deleting release');
      const { data: resp } = await octokit.rest.repos.deleteRelease({
        owner,
        repo,
        release_id: dat1.data.id
      });

      core.debug(resp);
    }
  } catch (ex: any) {
    core.setFailed(ex.message);
  }
};

run();
