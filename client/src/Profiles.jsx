import { gql, useQuery } from "@apollo/client";

const GET_PROFILES = gql`
  query Profiles {
    profiles {
      _id
      email
      name
      password
      skills
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
          {profile.name} loves {profile.skills.join(", ")}
        </p>
      ))}
    </div>
  );
};

export default Profiles;
