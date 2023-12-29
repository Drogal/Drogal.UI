import { Modal } from '../Components/Modal/Modal';

export default {
  title: 'Example/Modal',
  component: Modal,
  parameters: {    
    layout: 'centered',
  },  
  tags: ['autodocs']
};

export const Default = {
  args: {    
    visible: true, 
    title:"Tela do Modal"
  },
};
