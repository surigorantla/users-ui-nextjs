import { useRouter } from 'next/router'
import styled from "styled-components";
import useSwr from 'swr'
import fetcherFn from '../utils/fetcherFn'
import Title from '../components/Title';
const StyledParentWrapper = styled.div`
  text-align: center;
`;
const Styledwrapper = styled.div`
    padding: 0.5em;
  `;
  const Styledlabel = styled.span`
    padding: 5px;
    font-weight:bold;
    width: 90px;
    text-align:left;
    display:inline-block;
  `;
  const Styledtext = styled.span`
    padding: 1em;
    text-align:left;
    display:inline-block;
    width: 100px;
  `;
export default function User() {
  const router = useRouter()
  let id ;
  const queryIdStr = router.query.id;
  if(queryIdStr) {
      id = queryIdStr.split('-')[2];
  }
  
  const { data, error } = useSwr(`/api/user/${id}` , fetcherFn)

  if (error) return <div>Failed to load user</div>
  if (!data) return <div>Loading...</div>

  return (
    <StyledParentWrapper>
      <Title>User Details</Title>
      <img src={data.avatar} />
      <Styledwrapper>
        <Styledlabel>User ID:</Styledlabel>
        <Styledtext>{data.id}</Styledtext>
      </Styledwrapper>
      <Styledwrapper>
        <Styledlabel>First Name:</Styledlabel>
        <Styledtext>{data.first_name}</Styledtext>
      </Styledwrapper>
      <Styledwrapper>
        <Styledlabel>Last Name:</Styledlabel>
        <Styledtext>{data.last_name}</Styledtext>
      </Styledwrapper>
      <Styledwrapper>
        <Styledlabel>Email:</Styledlabel>
        <Styledtext>{data.email}</Styledtext>
      </Styledwrapper>
      
    </StyledParentWrapper>
    
  )
}