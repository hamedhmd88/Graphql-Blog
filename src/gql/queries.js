import { gql } from "@apollo/client";

export const GET_QUERIES = gql`

query {
    posts {
      title
      slug
      id
      admis {
      ... on Author {
        id
        name
        avatar {
          url
        }
      }
    }
      coverPhoto {
        url
      }
    }
  }
`

export const GET_AUTHORS = gql`
  query {
    authors {
    avatar {
      url
    }
    field
    id
    name
    slug
  }
  }
`;


export const GET_AUTHOR = gql`
  query getAuthor($slug: String!) {
    author(where: {slug: $slug}) {
    avatar {
      url
    }
    field
    name
    description {
      html
    }
  }
  posts {
    coverPhoto {
      url
    }
    id
    slug
    title
  }
  }
`

export const GET_POST = gql`
query getPost($slug: String!) {
  post(where: {slug: $slug}) {
    admis {
      ... on Author {
        id
        name
        avatar {
          url
        }
        field
      }
    }
    content {
      html
    }
    coverPhoto {
      url
    }
    title
  }
}
`;












