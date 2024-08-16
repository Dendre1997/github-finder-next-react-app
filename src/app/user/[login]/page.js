'use client';
import {FaCodepen, FaCodpen, FaStore, FaUserFriends, FaUsers} from 'react-icons/fa'
import { useEffect, useContext } from 'react';
import { useParams } from 'next/navigation'
import  Link from 'next/link';
import Spinner from '@/components/layout/Spinner';
import RepoList from '@/components/repos/RepoList';
import GitHubContext from '@/context/github/GithubContext';
import { getUserAndRepos } from '@/context/github/GitHubActions'
// import { useRouter } from 'next/navigation';

export default function User() {
  const { user, loading, repos, dispatch } = useContext(GitHubContext)
  const { login } = useParams()
  // const params = useParams()
  useEffect(() => {
    if (login) {
      dispatch({type: 'SET_LOADING'})
      // getUser(login)
      // getUserRepos(login)
      const getUserData = async () => {
        // const userData = await getUser(login)
        // dispatch({ type: 'GET_USER', payload: userData })
        
        // const userRepoData = await getUserRepos(login)
        // dispatch({ type: 'GET_REPOS', payload: userRepoData })
        const userData = await getUserAndRepos(login)
        dispatch({ type: 'GET_REPOS_AND_REPOS', payload: userData })

      }
      getUserData()
    }
    // getUserRepos(login)
  }, [login])

  const  {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    // login,
  html_url,
  followers,
  following,
  public_repos,
  public_gists,
  hireable

  } = user

  if (loading) {
    return <Spinner />
  }
  return (
    <>
      <div className="w-full h-full mx-auto lg:w-10/12">
      <div className="mb-4">
        <Link href="/" className='btn btn-ghost'>Back To Search</Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md-cols-3 mb-8 md:gap-8">
          <div className="costom-card-image mb-6 md:mb-0">
            <div  className=" shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt="" />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0">
                  {name}
                </h2>
                <p>{login}</p>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <div className="ml-2mr-1 badge badge-success">
                  {type}
                </div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a href={html_url} target='_blank' rel='noreferrer' className='btn btn-outline'>
                  Visit GitHub Profile
                </a>
              </div>
            </div>

            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">Location</div>
                  <div className="text-lg stat-value">{ location }</div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-md">Website</div>
                  <div className="text-lg stat-value">
                    <a href={`https://${blog}`} target='_blank' rel='norefer'>
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="text-lg stat-value">
                    <a href={`https://twitter.com/${twitter_username}`} target='_blank' rel='norefer'>
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>


        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className='text-3xl md:text-5xl'/>
            </div>
            <div className="stat-title pr-5">
              Followers
            </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {followers}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUserFriends className='text-3xl md:text-5xl'/>
            </div>
            <div className="stat-title pr-5">
              Following
            </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {following}
            </div>
          </div>

              <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCodepen className='text-3xl md:text-5xl'/>
            </div>
            <div className="stat-title pr-5">
              Public Repos
            </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_repos}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaStore className='text-3xl md:text-5xl'/>
            </div>
            <div className="stat-title pr-5">
              Public Gists
            </div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_gists}
            </div>
          </div>
        </div>

        <RepoList repos={repos} />
      </div>

    </>
  );
}
