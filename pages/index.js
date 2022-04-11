import useSwr from 'swr'
import Table from "./../components/Table";
import Title from './../components/Title';
import fetcherFn from './../utils/fetcherFn'


const  Index = () => {
  const { data, error } = useSwr('/api/users', fetcherFn)

  if (error) return <div>Failed to load users</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <Title>Users List</Title>
      <Table data={data} />
      
    </div>
  )
}

export default Index;