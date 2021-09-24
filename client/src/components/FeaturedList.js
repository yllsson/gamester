import ListItem from './ListItem';

const FeaturedList = ({ featuredListData }) => {
  console.log(featuredListData);
  return (
    <div className='featuredList'>
      <h2>I'm your featured list!</h2>
      {featuredListData.map((item) => {
        return <ListItem name={item.name} />;
      })}
    </div>
  );
};

export default FeaturedList;
