// import { gql } from "@apollo/client";
import gql from 'graphql-tag';
export const QUERY_MISSION_INFO = gql`
  query MissionInfoQuery($id: String!) {
    launch(id: $id) {
      mission_name
      launch_year
      launch_success
      details
      launch_site {
        site_name
      }
      rocket {
        rocket_name
        rocket_type
      }
      
    }
  }
`;
