import persona1 from '../../../assets/image/persona1.png';
import persona2 from '../../../assets/image/persona2.png';
import persona3 from '../../../assets/image/persona3.png';
import speechBubble1 from '../../../assets/image/speech_bubble1.png';
import speechBubble2 from '../../../assets/image/speech_bubble2.png';
import speechBubble3 from '../../../assets/image/speech_bubble3.png';

function LandingPage6() {
    const speechBubbleList = [
        { persona: persona1, speechBubble: speechBubble1 },
        { persona: persona2, speechBubble: speechBubble2 },
        { persona: persona3, speechBubble: speechBubble3 }
    ]

    return (
        <div className="page6">
            <div className="big-title">Let's go Lounge</div>
            <div className="title-description">
                당신의 인사이트에 대해 사람들과 함께 가볍게 이야기 나눠보세요! <br/>
                그리고 마음이 맞는 사람을 발견했다면, 본격적으로 라운지에서 함께 아이디어를 발전시킬 수 있습니다.
            </div>
            <div className="speech-bubble-wrapper">
                {
                    speechBubbleList.map((bubble, idx) => (
                        <div className="speech-bubble" id={`bubble${idx+1}`}>
                            <img className="per-img" src={bubble.persona} alt="persona"/>
                            <img className="bubble-img" src={bubble.speechBubble} alt="speech bubble"/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default LandingPage6;