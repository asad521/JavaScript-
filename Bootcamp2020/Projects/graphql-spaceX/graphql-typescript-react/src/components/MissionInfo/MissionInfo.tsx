import * as React from 'react';
import { MissionInfoQueryQuery } from '../../generated/graphql';

interface Props {
  data: MissionInfoQueryQuery;
}

const MissionInfo: React.FC<Props> = ({data}) => (
    
  <div >
    {console.log(data)}
          <h3>Mission Info Containter</h3>
          <ul>
           {data.launch?.mission_name}
          </ul>
          <ul>
           {data.launch?.launch_year}
          </ul>
          <ul>
           {data.launch?.launch_success}
          </ul>
          <ul>
           {data.launch?.details}
          </ul>



  </div>
);

export default MissionInfo;