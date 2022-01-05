import React from 'react'
import { useMissionInfoQueryQuery } from '../../generated/graphql';

import MissionInfo from './MissionInfo';
export const MissionInfoContainer = () => {
     const { data, loading, error } = useMissionInfoQueryQuery({
       variables: {
          id: "34"
       }
     });
     if (loading) {
        return <div>Loading...</div>;
      }
    
      if (error || !data) {
        return <div>ERROR</div>;
      }
      return <MissionInfo data={data} />;
}


export default MissionInfoContainer;