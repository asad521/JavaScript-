import * as React from 'react';
import { MissionInfoQueryQuery } from '../../generated/graphql';

interface Props {
  data: MissionInfoQueryQuery;
}

const LaunchList: React.FC<Props> = ({data}) => (
    
  <div >
          <h3>Launche List Container</h3>

      {console.log(data.launch)}
          <ul>
           {data.launch?.mission_name}
          </ul>
          <ul>
           {data.launch?.launch_year}
          </ul>
          <ul>
           {data.launch?.launch_success}
          </ul>
  </div>
);

export default LaunchList;