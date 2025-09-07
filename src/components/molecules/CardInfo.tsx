
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

type CardDataInfo = {
  title: string;
  description: string;
  image: string;
}

export const CardInfo: React.FC<CardDataInfo> = ({ title, description, image }) => {
  return (
    <Card sx={{ maxWidth: 505, width: 300, height: 400 }}>
      <CardMedia
        sx={{ height: 140, marginTop: 2 }}
        title={title}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardInfo