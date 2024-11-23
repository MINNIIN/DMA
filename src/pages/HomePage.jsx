import React, { useRef, useState, useEffect } from 'react';
import dmaLogo from '../ms_image/dmaLogo.png';
import menu_icon from '../ms_image/menu_icon.png';
import home_icon from '../ms_image/home_icon.png';
import user_icon from '../ms_image/user_icon.png';
import homeBackground_1 from '../ms_image/homeBackground_1.jpg';
import homeBackground_2 from '../ms_image/homeBackground_2.jpg';
import startMonitoringBackground from '../ms_image/startMonitoringBackground.jpg';
import driveHabitBackground from '../ms_image/driveHabitBackground.jpg';
import { useNavigate } from 'react-router-dom'; 

const HomePage = () => {  

    const [showMenuBar, setShowMenuBar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0); // 스크롤 위치 파악..

    const navigate = useNavigate();

    const handleStartMonitoringClick = () => {
        navigate('/start-page'); 
    };

    const handleMyPageClick = () => {
        navigate('/mypage'); 
    };

    const handledriveHabitClick = () => {
        navigate('/recharts'); 
    };

    const handleScroll = () => {
        const currentScrolly = window.scrollY;

        if (currentScrolly > lastScrollY) {
            // 스크롤 내릴때는 메뉴바를 숨김
            setShowMenuBar(false);
        } else {
            setShowMenuBar(true);
        }
        setLastScrollY(currentScrolly);
    };

    useEffect(() => {
        // 스크롤 이벤트 리스너
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div style={styles.container}>
            
             
                    <div style={styles.startMonitoringBackgroundbox}>
                        <div style={styles.titleContainer}>
                            <h1 style={styles.logo}></h1>
                        </div>

                        <div style={styles.mainContainer}>
                            <div style={styles.mainText}>환영합니다!</div>
                            <div style={styles.secondText}>운전자 모니터링을 시작하시겠어요?</div>
                        </div>
                        <button style={styles.startMonitoringButton} onClick={handleStartMonitoringClick}>모니터링 시작하기</button>
                    </div>
                    
                
                    <div style={styles.mainContainer}>
                        <div style={styles.driveHabitText}>운전 중 발생한 이벤트를 확인해보세요.</div>
                    </div>

                    <div style={styles.driveHabitBackground}>
                        <button style={styles.driveHabitButton} onClick={handledriveHabitClick}>운전 습관 확인하기</button>
                    </div>

                    <div style={styles.noticeContainer}>
                        <button style={styles.noticeButton}>공지사항 〉</button>
                        <div style={styles.line}></div>

                        <div style={styles.noticeButtonContainer}>
                            <button style={styles.firstNoticeButton}>⚬ 애플리케이션 소개 〉 </button>
                            <button style={styles.secondNoticeButton}>⚬ 프로젝트 팀 소개 〉 </button>
                        </div>
                        
                    </div>
                
                

                
                
            
            
            
            <div style={{
                    ...styles.menuBar, // 메뉴바 사라지고 생기는 애니메이션
                    transform: showMenuBar ? 'translateY(0)' : 'translateY(100%)',
                    transition: 'transform 0.3s ease'
                }}>
                    {/* <div style={styles.line}></div> */}
                    <div style={styles.buttonContainer}>
                        <button style={styles.menuButton}></button>
                        <button style={styles.homeButton}></button>
                        <button style={styles.mypageButton} onClick={handleMyPageClick}></button>
                    </div>
                </div>
            
            
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        width: '100%',
        height: '130vh', // 임시로 150vh 로 지정 px로 바꿔도된다..
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundSize: 'cover',  // 배경 꽉 채우고, 화면 길이가 길어지면 당연히 원본사진에서 밑으로 늘어날수밖에
        // backgroundPosition: 'center',  // 배경 중앙에 위치
        backgroundColor: '#EAEAEA',
        // backgroundImage: `url(${homeBackground_1})`
        overflowY: 'auto', // 스크롤 가능
    },
    // scrollContainer: {
    //     overflowY: 'auto', // 스크롤 가능
    //     flex: 1,
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center', // 수평 중앙 정렬
    //     // touchAction: 'none', // 확대,축소 불가능
    // },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '5px',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: '45px',
        height: '45px',
        flexDirection: 'column',
        backgroundImage: `url(${dmaLogo})`,
        backgroundSize: 'cover',  // 배경 꽉 채우고
        backgroundPosition: 'center',  // 배경 중앙에 위치
        marginRight: '10px',//

    },
    titleText: {
        fontSize: '30px',
        color: '#000000',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    mainText: {
        fontSize: '20px',
        color: '#000000',
        marginLeft: '40px',
        fontWeight: 'bold',
    },
    secondText: {
        fontSize: '17px',
        color: '#000000',
        marginLeft: '40px',
        fontWeight: 'bold',
    },
    driveHabitText: {
        fontSize: '17px',
        color: '#000000',
        marginLeft: '40px',
        fontWeight: 'bold',
        marginTop: '20px',
    },
    line: {
        width: '100%',
        height: '1px',
        background: '#5D5D5D',
        marginTop: '8px',
        marginBottom: '20px',
    },
    mainContainer: {
        display: 'flex',
        width: '100%',
        height: '30px', 
        flexDirection: 'column',
        marginTop: '5px',  
    },
    
    menuBar: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '43px',
        backgroundColor: '#EAEAEA',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
    },
    buttonContainer: {
        display: 'flex', 
        width: '100%',
        justifyContent: 'space-around',
    },
    menuButton: {
        width: '30px',
        height: '30px',
        background: `url(${menu_icon})`,
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        backgroundSize: 'contain', // 이미지 사이즈 맞게..
        backgroundPosition: 'center', // 이미지 중앙 위치
    },
    homeButton: {
        width: '30px',
        height: '30px',
        backgroundColor: 'transparent',
        background: `url(${home_icon})`,
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        backgroundSize: 'contain', // 이미지 사이즈 맞게..
        backgroundPosition: 'center', // 이미지 중앙 위치   
    },
    mypageButton: {
        width: '30px',
        height: '30px',
        backgroundColor: 'transparent',
        background: `url(${user_icon})`,
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        backgroundSize: 'contain', 
        backgroundPosition: 'center', 
    },
    // startMonitoringContainer: {
    //     marginTop: '40px',
    //     width: '300px',
    //     height: '300px',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: '#FFFFFF',
    //     boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    //     // backgroundImage: `url(${startMonitoringBackground})`,
    //     display: 'flex',
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     borderRadius: '20px',

    // },
    startMonitoringBackgroundbox: {
        flexDirection: 'column',
        width: '100%',
        height: '300px',
        backgroundImage: `url(${startMonitoringBackground})`,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.8)',
        display: 'flex',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        alignItems: 'center',
        // borderRadius: '20px',
        // justifyContent: 'center',
        
    },
    startMonitoringButton: {
        marginTop: '100px',
        width: '200px',
        height: '50px',
        justifyContent: 'center',
        borderRadius: '20px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
        border: '1px solid white', // 흰색 테두리
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        fontWeight: 'bold',
        color: '#353535',
    },
    driveHabitBackground: {
        width: '300px',
        height: '200px',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
        backgroundImage: `url(${driveHabitBackground})`,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '20px',
        
    },
    driveHabitButton: {
        width: '200px',
        height: '50px',
        justifyContent: 'center',
        borderRadius: '20px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
        border: '1px solid white', // 흰색 테두리
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        fontWeight: 'bold',
        color: '#353535',
    },
    circleBackground: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: '#EAEAEA',
        top: 280, // 기준점에서 얼마나 내려갈지 설정
        borderRadius: '20px',
    },
    noticeContainer: {
        width: '100%',
        height: '250px',
        marginTop: '25px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
        borderRadius: '20px',
    },
    noticeButton: {
        fontSize: '15px',
        marginTop: '10px',
        color: '#000000',
        // fontWeight: 'bold',
        backgroundColor: '#FFFFFF',
        marginLeft: '10px',
        border: '1px solid white', // 흰색 테두리
    },
    noticeButtonContainer: {
        flexDirection: 'column',
    },
    firstNoticeButton: {
        marginTop: '5px',
        backgroundColor: '#FFFFFF',
        marginLeft: '10px',
        border: 'none', // 기본 테두리는 없앰
        // borderBottom: '1px solid gray', // 아래쪽에만 연한 회색 테두리
        fontSize: '15px',
        color: '#000000',
    },
    secondNoticeButton: {
        marginTop: '5px',
        backgroundColor: '#FFFFFF',
        marginLeft: '10px',
        border: 'none', // 기본 테두리는 없앰
        // borderBottom: '1px solid gray', // 아래쪽에만 연한 회색 테두리
        fontSize: '15px',
        color: '#000000',
        marginLeft: '30px',
        
    },
}

export default HomePage;