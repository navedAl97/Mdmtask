import { Table } from 'antd';

function User() {
  type UserType = {
    chemicalClass: string;
    therapeuticClass: string;
    actionClass: string;
    hsnCode: number;
    habitForming: string;
  };

  const userList: UserType[] = [
    {
        chemicalClass: "Fructose 500mg",
        therapeuticClass: 'fructose 2nd 500mg',
        actionClass: "deliver",
        hsnCode: 547938,
        habitForming: 'Dogase',
    },
    {
        chemicalClass: "Fructose 500mg",
        therapeuticClass: 'fructose 2nd 500mg',
        actionClass: "deliver",
        hsnCode: 547938,
        habitForming: 'Dogase',
    },
    {
        chemicalClass: "Fructose 500mg",
        therapeuticClass: 'fructose 2nd 500mg',
        actionClass: "deliver",
        hsnCode: 547938,
        habitForming: 'Dogase',
    },
    {
        chemicalClass: "Fructose 500mg",
        therapeuticClass: 'fructose 2nd 500mg',
        actionClass: "deliver",
        hsnCode: 547938,
        habitForming: 'Dogase',
    },
    {
        chemicalClass: "Fructose 500mg",
        therapeuticClass: 'fructose 2nd 500mg',
        actionClass: "deliver",
        hsnCode: 547938,
        habitForming: 'Dogase',
    },
    {
        chemicalClass: "Fructose 500mg",
        therapeuticClass: 'fructose 2nd 500mg',
        actionClass: "deliver",
        hsnCode: 547938,
        habitForming: 'Dogase',
    },
    {
        chemicalClass: "Fructose 500mg",
        therapeuticClass: 'fructose 2nd 500mg',
        actionClass: "deliver",
        hsnCode: 547938,
        habitForming: 'Dogase',
    },
   
    
  ];

  const columns = [
    {
      title: 'ChemicalClass',
      dataIndex: 'chemicalClass',
      key: 'chemicalClass',
    },
    {
      title: 'TherapeuticClass',
      dataIndex: 'therapeuticClass',
      key: 'therapeuticClass',
    },
    {
      title: 'HctionClass',
      dataIndex: 'actionClass',
      key: 'actionClass',
    },
    {
      title: 'HsnCode',
      dataIndex: 'hsnCode',
      key: 'hsnCode',
    },
    {
      title: 'HabitForming',
      dataIndex: 'habitForming',
      key: 'habitForming',
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
