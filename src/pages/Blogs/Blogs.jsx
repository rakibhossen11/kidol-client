import React from "react";

const Blogs = () => {
  return (
    <div className="max-w-3xl mx-auto my-12">
      <div className="">
        <h2 className="font-display text-4xl mb-10">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h2>
        <p className="font-myFont">
          A refresh token just helps you re-validate a user without them having
          to re-enter their login credentials multiple times. The access token
          is re-issued, provided the refresh token is a valid one requesting
          permission to access confidential resources.
        </p>
      </div>
      <div className="divider"></div>
      <div className="">
        <h2 className="font-display text-4xl mb-10">
          How do they work and where should we store them on the client-side?
        </h2>
        <p className="font-myFont">
          Access tokens and refresh tokens are commonly used in authentication
          systems to securely manage user sessions and grant access to protected
          resources. Here's an overview of how they work and where you should
          store them on the client-side: Access Token: An access token is a
          credential that allows a client (such as a web or mobile application)
          to access protected resources on behalf of a user. When a user
          successfully authenticates, the server issues an access token,
          typically in the form of a JSON Web Token (JWT). This token contains
          encoded information about the user's identity and permissions. The
          client includes the access token in the header or body of each API
          request to authenticate and authorize access to protected resources.
          The server verifies the token's validity and permissions before
          responding to the request. Refresh Token: A refresh token is a
          long-lived credential that is used to obtain a new access token when
          the current one expires. It serves as a means for the client to
          request a fresh access token without requiring the user to
          reauthenticate. Typically, the refresh token is issued alongside the
          access token during the initial authentication process. It has a
          longer lifespan and is securely stored on the client-side. The client
          sends the refresh token to the server when the access token expires,
          and if the refresh token is valid, the server responds with a new
          access token.
        </p>
      </div>
      <div className="divider"></div>
      <div className="">
        <h2 className="font-display text-4xl mb-10">
          Compare SQL and NoSQL databases?
        </h2>
        <p className="font-myFont">
          SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable. SQL databases are table-based, while NoSQL
          databases are document, key-value, graph, or wide-column stores. SQL
          databases are better for multi-row transactions, while NoSQL is better
          for unstructured data like documents or JSON
        </p>
      </div>
      <div className="divider"></div>
      <div className="">
        <h2 className="font-display text-4xl mb-10">
          What is express js? What is Nest JS?
        </h2>
        <p className="font-myFont">
          NestJS is a framework for developing modern server-side applications
          in Node. js. It is built on top of Express, a popular server framework
          for Node. js, and provides a robust set of features for building
          efficient, scalable, and enterprise-grade applications.
        </p>
      </div>
      <div className="divider"></div>
      <div className="">
        <h2 className="font-display text-4xl mb-10">
          What is MongoDB aggregate and how does it work
        </h2>
        <p className="font-myFont">
          What is Aggregation in MongoDB? Aggregation is a way of processing a
          large number of documents in a collection by means of passing them
          through different stages. The stages make up what is known as a
          pipeline. The stages in a pipeline can filter, sort, group, reshape
          and modify documents that pass through the pipeline.
        </p>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Blogs;
