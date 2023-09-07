import Users from '@/components/Users'

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  return await res.json();
}

async function HomePage() {
  const { data } = await fetchUsers();
  
  return (
    <Users users={data}/>
  );
}

export default HomePage;
