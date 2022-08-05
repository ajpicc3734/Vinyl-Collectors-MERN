import React from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import FriendList from '../components/FriendList';
import coverImage from '../assets/cover/background.jpg';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS, QUERY_ME_BASIC } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const posts = data?.posts || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      {!loggedIn && (
        <div className="coverImage">
          <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </div>
      )}
      {!loggedIn && (
        <div className="text-center">
          <h2>
            Welcome to Vinyl Collectors..
            A One Stop Shop For Vinyl Lovers
          </h2>
        </div>
      )}
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <PostForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList
              posts={posts}
              title="Recent Posts..."
            />
          )}
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <FriendList
              username={userData.me.username}
              friendCount={userData.me.friendCount}
              friends={userData.me.friends}
            />
          </div>
        ) : null}
      </div>
    </main >
  );
};

export default Home;
