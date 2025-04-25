import { Table } from 'antd';

function User() {
  type UserType = {
    id: number;
    name: string;
    age: number;
    add: string;
    gander: string;
    group:string;
  };

  const userList: UserType[] = [
    {
      id: 1,
      name: 'Thunder Clint',
      age: 24,
      add: 'Thunder Clint, Washington America, 1053220',
      gander: 'Male',
      group:"A"
    },
    {
      id: 2,
      name: 'Thunder Josh',
      age: 23,
      add: 'Thunder Clint, Washington America, 1053220',
      gander: 'Male',
       group:"B-"
    },
    {
      id: 3,
      name: 'Dragon Roy',
      age: 25,
      add: 'Thunder Clint, Washington America , 1053220',
      gander: 'Male',
       group:"A+"
    },
    {
      id: 4,
      name: 'Ella Walia',
      age: 45,
      add: 'Thunder Clint, Washington America, 1053220',
      gander: 'Female',
       group:"O"
    },
    {
      id: 5,
      name: 'Sower Clint',
      age: 34,
      add: 'Thunder Clint, Washington America, 1053220',
      gander: 'Male',
       group:"A-"    
    },
    {
      id: 6,
      name: 'Sower Clint',
      age: 34,
      add: 'Thunder Clint, Washington America, 1053220',
      gander: 'Male',
       group:"A-"    
    },
    {
      id: 7,
      name: 'Sower Clint',
      age: 34,
      add: 'Thunder Clint, Washington America, 1053220',
      gander: 'Male',
       group:"A-"    
    },
    {
      id: 8,
      name: 'Sower Clint',
      age: 34,
      add: 'Thunder Clint, Washington America, 1053220',
      gander: 'Male',
       group:"A-"    
    },
    
  ];

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'add',
      key: 'add',
    },
    {
      title: 'Gender',
      dataIndex: 'gander',
      key: 'gander',
    },
    {
      title: 'Group',
      dataIndex: 'group',
      key: 'group',
    },
  ];

  return (
    <>
      <h1>This is User Data</h1>
      <Table dataSource={userList} columns={columns} rowKey="id" pagination={{ pageSize: 5 }} />
    </>
  );
}

export default User;
