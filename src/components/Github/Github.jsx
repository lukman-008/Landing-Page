import { useLoaderData } from "react-router-dom";
function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/lukman-008').then(
    //         response => response.json()
    //     ).then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    //  },[]);
  return (
    <div  className="  text-center m-5 bg-gray-600 text-white p-4 text-3xl">
      Github follower : {data.followers}
      <img className=' items-center' src={data.avatar_url} alt="not uploded" width={300} />
    </div>
  );
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/lukman-008");
    return response.json();
}