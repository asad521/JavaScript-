import * as React from 'react';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";  
import CardHeader from "@material-ui/core/CardHeader";  

const CardComp = props => {
  return (
    <div>
    <Card  style={{ border: "2", borderColor: "BLACK" }}>
      <CardHeader title="Header " subheader="asd;f"></CardHeader>
      <CardContent>
       
        <Typography variant="body2">
          well meaning and kindly.
          <br />
         adsfadf
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}

CardComp.propTypes = {

}

export default CardComp

