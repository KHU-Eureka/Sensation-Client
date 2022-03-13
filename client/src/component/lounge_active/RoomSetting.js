import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { BiChevronRight } from 'react-icons/bi';
import './RoomSetting.css';

function RoomSetting(props) {
    const ref = useRef();
    const navigate = useNavigate();
    const { showToggle, setShowToggle, roomId, setShowRoomInfoModal } = props;
    const activePersonaId = useSelector(state=>state.activePersonaId);

    const clickOutside = (e) => {
        if (showToggle && !ref.current.contains(e.target)) {
            setShowToggle(false);
        }
    }

    useEffect(()=> {
        document.addEventListener('click', clickOutside);
        return ()=> {
            document.removeEventListener('click', clickOutside);
        }
    }, [])

    const exitTheRoom = async () => {
        try {
            await axios.put(
                `/api/lounge/${roomId}/exit/${activePersonaId}`
            )
            navigate('/lounge', { state: {alert:{title: "방에서 퇴장했습니다.", subtitle: "즐거운 시간이었나요? :)"}}})
        } catch(err) {
            console.log(err);
        }
    }


    return (
        <ul className="room-setting" ref={ref}>
            <li onClick={()=>{setShowRoomInfoModal(true)}}>
                방 정보 <BiChevronRight/>
            </li>
            <li>저장</li>
            <li>프레임을 이미지로 저장</li>
            <li onClick={()=>{exitTheRoom()}}>
                방 나가기
            </li>
        </ul>
    )
}

export default RoomSetting;