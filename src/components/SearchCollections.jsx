import { Select } from 'antd';
import { Input, Space } from 'antd';
import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { getCollectionsByChain } from "helpers/collections";
import { ContactsOutlined } from '@ant-design/icons';


function SearchCollections({setInputValue, setPage}){
    const { Option } = Select;
    const { Search } = Input;
    const { chainId } = useMoralisDapp();
    const NFTCollections = getCollectionsByChain(chainId);
    
    

    // function onChange(value) {
    //     setInputValue(value);
    // }

    function onSearch(value) {
        console.log(NFTCollections[0]);
        if (value.length !== NFTCollections[0].addrs.length){
            setPage("Not Found")
        } else{
            var flag = false;
            for (var i = 0, len = NFTCollections.length; i < len; i ++){
                if (value.toLowerCase() === NFTCollections[i].addrs.toLowerCase()){
                    console.log(value, NFTCollections[i].addrs)
                    flag = true;
                    break;
                };
            }
            console.log(NFTCollections);
            if (flag === true){
                setPage("collection");
                flag = false;
            } else{
                setPage("Not Found");
            }
        }
        // setPage("collection")
        setInputValue(value)
    }

    return (
        <>
        <Search
            placeholder="Check NFT Address"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
        />
        
        {/* <Select
            showSearch
            style={{width: "1000px",
                    marginLeft: "20px" }}
            placeholder="Find a Collection"
            optionFilterProp="children"
            onChange={onChange}
        >   
        {NFTCollections && 
            NFTCollections.map((collection, i) => 
            <Option value={collection.addrs} key= {i}>{collection.name}</Option>
            )
            }   
        </Select> */}
            
        </>
    )
}
export default SearchCollections;