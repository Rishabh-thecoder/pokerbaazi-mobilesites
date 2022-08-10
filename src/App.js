import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Topheader from './components/Topheader';
import leaderbaoard from './json/leaderboard.json';
import tournament from './json/tournament.json'


function App() {
  return (
    <div>
       <Topheader title="Baazi Turbo" colorbox="black-box"/>
       <div className="tab-content pb-5 mb-5" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pills-info" role="tabpanel" aria-labelledby="pills-info-tab" tabindex="0">
        <div className='text-center'>
          <div>
            <img src='./images/baazi-turbo/Main_card.png' alt='img1' className='img-fluid' />
          </div>
           <h3 className='text-center pt-4'>Series Highlights</h3>
          <div className='p-3'>
            <img src='../images/baazi-turbo/Card_2.png' alt='img2' className='img-fluid' />
          </div>

          <div className='px-3'>
            <img src='../images/baazi-turbo/Card_3.png' alt='img3' className='img-fluid' />
          </div>

          <div className='p-3'>
            <img src='../images/baazi-turbo/Card_4.png' alt='img4' className='img-fluid' />
          </div>

          <div className='px-3'>
            <img src='../images/baazi-turbo/Card_5.png' alt='img5' className='img-fluid' />
          </div>
        </div>
          </div>
        <div className="tab-pane fade" id="pills-tournament" role="tabpanel" aria-labelledby="pills-tournament-tab" tabindex="0">
          <div className='pt-2'>
              {
                tournament.map( tournament => {
                  return(
                    <>
                    <div className='white-box'>
                      <strong><p>{tournament.Sno} {tournament.Name}</p></strong>  
                      <div className="d-flex justify-content-between">
                        <div ><img src='../images/icons/cash.png' alt='cash icon' width={15} /> <b>Buy-in: </b>{tournament['Buy-in']}+{tournament.Fee}</div>
                        <div ><img src='../images/icons/trophy.png' alt='trophy' width={15} /><b> Prize: </b>{tournament.Guarantee}</div>   
                        <div >{tournament.Time}</div>
                      </div> 
                   </div> 
                    </>
                  )
                })
              }
          </div>
          </div>
          <div className="tab-pane fade" id="pills-leaderboard" role="tabpanel" aria-labelledby="pills-leaderboard-tab" tabindex="0">
          <h3 className='text-center pt-2'>Series Leaderboard</h3>
              <div className="d-flex justify-content-around">
                <div className="px-2"><b>Rank</b></div>
                <div className="px-2"><b>Prize</b></div>
              </div>

          {
            leaderbaoard.map( leaderbaoard => {
                return(
                  <>                 
                    <div className="d-flex justify-content-around white-box">
                        <div className="p-2">#{leaderbaoard.winnernumber}</div>
                        <div className="p-2"><img src='../images/icons/cash.png' alt='cash icon' width={20} /> ₹{leaderbaoard.prize}</div>
                      </div>
                  </> 
                )
                  
            })
          }
          </div>
        <div className="tab-pane fade" id="pills-terms" role="tabpanel" aria-labelledby="pills-terms-tab" tabindex="0">
          <h3 className='pt-3 text-center'>
            <img src='../images/icons/tnc-icon.svg' width={40} alt='terms and conditions' style={{paddingRight:"10px"}} />
            Terms and Conditions
          </h3>
          <ul className='tnc-points px-5'>
            <li>
            All tournaments will begin promptly at the scheduled time stated in the Tournament Lobby. We reserve the right to delay or cancel a tournament without prior notice. In case a user is registered and the tournament gets canceled, the Buy-in amount will be refunded to the user.

            </li>
            <li>
            Seats are assigned at random. Seat changes are not permitted.
            </li>
            <li>
            Prizes will be awarded as stated in the Tournament Lobby, except when a deal is made or the tournament is canceled.
            </li>
            <li>
            The prize structure is not finalized and keeps on changing as more users enter the tournament until registration has closed and the rebuy and/or add-on period is over.
            </li>
            <li>
            If two or more players are eliminated on the same hand, a player with more chips at the start of the hand finishes higher than a player with fewer chips.
            </li>
            <li>
            In order to be eligible to rebuy in a rebuy tournament, you must have the funds available in your account. Funds currently in play in other games are not considered to be available.
            </li>
            <li>
            Important information about each tournament, including the blind structure, length of rounds, rebuy and break information, can be found by selecting the tournament in the lobby. We reserve the right to change the parameters of any tournament at any time without notice.
            </li>
            <li>
            Tickets won through a contest, satellite, rewards or any other promotion for a particular tournament cannot be exchanged for another tournament.
            </li>
            <li>
            A player can be disqualified from the promotions and their winnings can be blocked if they are found guilty of any misconduct or fraudulent activities such as multi-accounting, chip dumping etc. in violation of the PokerBaazi.com policy. The final decision will be at the discretion of the PokerBaazi team.
            </li>
            <li>
            You understand and acknowledge that once a game/tournament has commenced, not being able to play due to slow internet connections, faulty hardware, internet connection failure, low computer configuration or for some other reason are not attributable to us and the same do not entitle you to refund of the entry fee you may have paid for participation.
            </li>
            <li>
            PokerBaazi.com reserves the right to change the terms and conditions without prior notice.
            </li>
            <li>
            By taking part in this promotion, you agree to allow PokerBaazi to share your name, username and images to social media and third party media channels.
            </li>
            <li>
            All Leaderboard prizes will be credited as Real Cash Bonus.
            </li>
          </ul>
          </div>
      </div>

      <ul className="nav nav-pills fixed-bottom  justify-content-around " id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active " id="pills-info-tab" data-bs-toggle="pill" data-bs-target="#pills-info" type="button" role="tab" aria-controls="pills-info" aria-selected="true">
            <img src='../images/icons/info.svg' alt='info' width={23} /><br />
            Info
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link gray-color" id="pills-tournament-tab" data-bs-toggle="pill" data-bs-target="#pills-tournament" type="button" role="tab" aria-controls="pills-tournament" aria-selected="false">
          <img src='../images/icons/schedule.svg' alt='schedule' width={23}/><br />
            Tournaments</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link gray-color" id="pills-leaderboard-tab" data-bs-toggle="pill" data-bs-target="#pills-leaderboard" type="button" role="tab" aria-controls="pills-leaderboard" aria-selected="false">
          <img src='../images/icons/leaderboard.svg' alt='leaderboard' width={23}/><br />
          leaderboard</button>  
        </li>
        <li className="nav-item" role="presentation"> 
          <button className="nav-link" id="pills-terms-tab" data-bs-toggle="pill" data-bs-target="#pills-terms" type="button" role="tab" aria-controls="pills-terms" aria-selected="false">
          <img src='../images/icons/tnc.svg' alt='terms' width={23}/><br /> 
            TnC</button>
        </li>
      </ul>
    </div>      
  );
}

export default App;
