import { gql } from '@apollo/client';

export const QUERY_LAUNCH_PROFILE = gql`
query LaunchProfile($id: String!) {
  launch(id: $id) {
    mission_name
    launch_year
    launch_success
  }
}
`;