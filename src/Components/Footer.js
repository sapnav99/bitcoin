import { AiOutlineBell } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { MdOutlineExplore } from 'react-icons/md';
import { BiSolidWallet } from 'react-icons/bi';

export default function Footer(){
    return(
        <div className='footer' style={{display:'flex', justifyContent:'center', alignItems:'center', 
        fontSize:'30px', backgroundColor:'white' }}>
        <BiSolidWallet style={{ marginRight: '15px' }}/>
        <MdOutlineExplore style={{ margin: '0 15px' }} />
         <AiOutlineBell style={{ marginLeft: '15px', marginRight: '15px' }}/>
         <FiSettings style={{ marginLeft: '15px' }} />  
         </div>  
    )
}