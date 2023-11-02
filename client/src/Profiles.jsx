import { gql, useQuery } from "@apollo/client";

const GET_PROFILES = gql`
  query Profiles {
    profiles {
      color
      _id
      name
    }
  }
`;

const Profiles = () => {
  const { loading, error, data } = useQuery(GET_PROFILES);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something has gone terribly wrong</p>;
  }

  return (
    <div>
      <h1>Profiles Coming Soon!...Like right now!</h1>
      {data.profiles.map((profile) => (
        <p key={profile._id}>
          {profile.name} loves {profile.color}
        </p>
      ))}
    </div>
  );
};

export default Profiles;
