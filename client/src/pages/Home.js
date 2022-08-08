import React from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import RecordList from '../components/RecordList';
import RecordForm from '../components/RecordForm';
import FriendList from '../components/FriendList';
import coverImage from '../assets/cover/background.jpg';
import logoutImage from '../assets/cover/logout.jpg';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS, QUERY_RECORDS, QUERY_ME_BASIC } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS, QUERY_RECORDS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const posts = data?.posts || [];
  const records = data?.records || [];

  const loggedIn = Auth.loggedIn();
  return (
    <main>
      {loggedIn && (
        <div className="coverImage">
          <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </div>
      )}
      {!loggedIn && (
        <div className="logoutImage">
          <img src={logoutImage} className="my-2" style={{ width: "70%" }} alt="logout" />
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
      {/* <div className="flex-row justify-space-between"> */}
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
        {loggedIn && (
          <div className="col-12 mb-3">
            <RecordForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <RecordList
              records={records}
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