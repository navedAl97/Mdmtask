import { Card } from 'antd';

const { Meta } = Card;

const Mycard: React.FC = () => {
  return (
    <div className="carddiv" style={{display:"flex", justifyContent:'center'}}>
    <Card
      title="Paracetamol Tablets"
      style={{ width: 450 }}
      extra={<span style={{ color: '#52c41a', fontWeight: 'bold' }}>₹25</span>}
    >
      <Meta
        
        description="Used for relieving pain and reducddddddddddddddddddddddddddddding fever. Safe for most ages and commonly used in households."
      />
    </Card>
    </div>
  );
};

export default Mycard;