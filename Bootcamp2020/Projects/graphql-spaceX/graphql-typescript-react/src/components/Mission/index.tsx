import React from "react";
import { useLaunchProfileQuery } from "../../generated/graphql";
import LaunchList from "./MissionList";
export const LaunchInfoContainer = () => {
   const { data, loading, error } = useLaunchProfileQuery({
     variables: {
        id: "12"
     }
   });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }
  return <LaunchList data={data} />;

};

export default LaunchInfoContainer;



