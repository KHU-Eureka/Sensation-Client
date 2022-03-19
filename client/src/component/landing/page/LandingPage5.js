import { useSelector } from "react-redux";
import { ReactComponent as RedSlot } from '../../../assets/svg/red_slot.svg';

function LandingPage5() {
    const senseInfoList = useSelector(state=>state.senseInfoList);

    return (
        <div className="page5">
            <div className="big-title">Find your Insight</div>
            <div className="title-description">
                우리의 영감은 언제 어디서 떠오를지 모릅니다. <br/>
                인사이트 페이지에서는 다양한 분야의 사람들이 모아놓은 인사이트들을 구경할 수 있어요. <br/>
                그리고 여러분들의 일상 속 영감도 등록해보세요. 수많은 영감들은 우리의 인사이트가 됩니다!
            </div>
            <div className="sense-card-wrapper">
                {
                    senseInfoList && senseInfoList.map((sense, idx)=> (
                        (sense.id !== 3 && 
                        <div className="sense-card-background">
                            <div className="sense-card" id={sense.name}>
                                { sense.svg }
                            </div>
                        </div>
                        )
                    ))
                }
                <RedSlot className="slot"/>
            </div>
        </div>
    )
}

export default LandingPage5;