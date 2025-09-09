import React from 'react'

type ServiceLayoutInfo = {
    title: string;
    description: string;
    backgroundImage: string;
    backgroundColor: string;
    display: string;
    colorTitle: string;
    colorText: string;
}

const ServiceLayout: React.FC<ServiceLayoutInfo> = ({title, description, backgroundColor, backgroundImage, display, colorText, colorTitle}) => {
  return (
    <div>ServiceLayout</div>
  )
}

export default ServiceLayout