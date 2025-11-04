import { HandSignal, DifficultyConfig } from '@/types';

export const handSignals: HandSignal[] = [
  { id: '1', name: 'ALL CLEAR', fileName: 'all-clear.webp', imagePath: '/images/all-clear.webp' },
  { id: '2', name: 'APPLY AIR', fileName: 'apply-air.webp', imagePath: '/images/apply-air.webp' },
  { id: '3', name: 'COME AHEAD', fileName: 'come-ahead.webp', imagePath: '/images/come-ahead.webp' },
  { id: '4', name: 'CONNECT HEADSET', fileName: 'connect-headset.webp', imagePath: '/images/connect-headset.webp' },
  { id: '5', name: 'CUT ENGINE', fileName: 'cut-engine.webp', imagePath: '/images/cut-engine.webp' },
  { id: '6', name: 'DISCONNECT PCA', fileName: 'disconnect-pca.webp', imagePath: '/images/disconnect-pca.webp' },
  { id: '7', name: 'DISENGAGE AIR', fileName: 'disengage-air.webp', imagePath: '/images/disengage-air.webp' },
  { id: '8', name: 'EMERGENCY STOP', fileName: 'emergency-stop.webp', imagePath: '/images/emergency-stop.webp' },
  { id: '9', name: 'END MARSHALLING', fileName: 'end-marshalling.webp', imagePath: '/images/end-marshalling.webp' },
  { id: '10', name: 'ENGINE FIRE', fileName: 'engine-fire.webp', imagePath: '/images/engine-fire.webp' },
  { id: '11', name: 'HOLD POSITION', fileName: 'hold-position.webp', imagePath: '/images/hold-position.webp' },
  { id: '12', name: 'INSERT CHOCKS', fileName: 'insert-chocks.webp', imagePath: '/images/insert-chocks.webp' },
  { id: '13', name: 'INSERT GROUND POWER', fileName: 'insert-ground-power.webp', imagePath: '/images/insert-ground-power.webp' },
  { id: '14', name: 'LEFT TURN', fileName: 'left-turn.webp', imagePath: '/images/left-turn.webp' },
  { id: '15', name: 'NEGATIVE', fileName: 'negative.webp', imagePath: '/images/negative.webp' },
  { id: '16', name: 'NEXT MARSHALLER', fileName: 'next-marshaller.webp', imagePath: '/images/next-marshaller.webp' },
  { id: '17', name: 'NORMAL STOP', fileName: 'normal-stop.webp', imagePath: '/images/normal-stop.webp' },
  { id: '18', name: 'RELEASE BRAKES', fileName: 'release-brakes.webp', imagePath: '/images/release-brakes.webp' },
  { id: '19', name: 'REMOVE CHOCKS', fileName: 'remove-chocks.webp', imagePath: '/images/remove-chocks.webp' },
  { id: '20', name: 'REMOVE GROUND POWER', fileName: 'remove-ground-power.webp', imagePath: '/images/remove-ground-power.webp' },
  { id: '21', name: 'RIGHT TURN', fileName: 'right-turn.webp', imagePath: '/images/right-turn.webp' },
  { id: '22', name: 'SET BRAKES', fileName: 'set-brakes.webp', imagePath: '/images/set-brakes.webp' },
  { id: '23', name: 'SLOW DOWN', fileName: 'slow-down.webp', imagePath: '/images/slow-down.webp' },
  { id: '24', name: 'START ENGINE', fileName: 'start-engine.webp', imagePath: '/images/start-engine.webp' },
  { id: '25', name: 'THIS MARSHALLER', fileName: 'this-marshaller.webp', imagePath: '/images/this-marshaller.webp' },
  { id: '26', name: 'THUMBS UP', fileName: 'thumbs-up.webp', imagePath: '/images/thumbs-up.webp' }
];

export const difficultyConfigs: DifficultyConfig[] = [
  { mode: 'easy', choices: 4, label: 'Easy (4 choices)' },
  { mode: 'medium', choices: 5, label: 'Medium (5 choices)' },
  { mode: 'hard', choices: 6, label: 'Hard (6 choices)' },
  { mode: 'typing', choices: 0, label: 'Type Answer (Expert)' }
];

export const getRandomHandSignals = (count: number, exclude?: HandSignal): HandSignal[] => {
  const available = exclude ? handSignals.filter(signal => signal.id !== exclude.id) : handSignals;
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const distractorAnswers = [
  'WAVE AIRCRAFT',
  'STOP AIRCRAFT',
  'PROCEED SLOWLY',
  'TAXI STRAIGHT',
  'FOLLOW ME',
  'GROUND CREW READY',
  'AIRCRAFT CLEAR',
  'BOARDING COMPLETE',
  'REFUEL COMPLETE',
  'PUSHBACK APPROVED',
  'TAXI TO GATE',
  'ENGINES OFF',
  'CHOCKS REQUIRED',
  'POWER CONNECTED',
  'CAUTION AREA',
  'MAINTENANCE HOLD',
  'INSPECTION REQUIRED',
  'CREW CHANGE',
  'FUEL CHECK',
  'CARGO SECURE',
  'GATE ARRIVAL',
  'DEPARTURE READY',
  'SAFETY CHECK',
  'CLEAR RUNWAY',
  'TAXI CLEARANCE',
  'GROUND CONTACT',
  'RADIO CHECK',
  'BEACON ON',
  'LIGHTS CHECK',
  'DOOR SECURE',
  'RAMP CLEAR',
  'PUSHBACK COMPLETE',
  'ENGINE START',
  'TAXI HOLD',
  'GROUND POWER',
  'AIR START',
  'HYDRAULIC CHECK',
  'FUEL DISCONNECTED',
  'BAGGAGE LOADED',
  'CATERING COMPLETE'
];

// Similar distractors for each real signal - designed to be confusing
const similarDistractors: Record<string, string[]> = {
  'ALL CLEAR': ['ALL GOOD', 'AREA CLEAR', 'ALL SET', 'CLEAR ALL', 'ALL READY', 'ZONE CLEAR'],
  'APPLY AIR': ['AIR ON', 'AIR READY', 'AIR CONNECT', 'ENGAGE AIR', 'AIR PRESSURE', 'START AIR'],
  'COME AHEAD': ['MOVE AHEAD', 'GO FORWARD', 'PROCEED AHEAD', 'ADVANCE FORWARD', 'KEEP COMING', 'MOVE FORWARD'],
  'CONNECT HEADSET': ['HEADSET ON', 'RADIO CONNECT', 'COMM CHECK', 'PLUG HEADSET', 'AUDIO CONNECT', 'COMMS ON'],
  'CUT ENGINE': ['ENGINE OFF', 'STOP ENGINE', 'SHUTDOWN ENGINE', 'KILL ENGINE', 'ENGINE STOP', 'POWER DOWN'],
  'DISCONNECT PCA': ['PCA OFF', 'AIR DISCONNECT', 'REMOVE PCA', 'PCA STOP', 'UNPLUG PCA', 'DETACH PCA'],
  'DISENGAGE AIR': ['AIR OFF', 'RELEASE AIR', 'AIR STOP', 'STOP AIR', 'AIR RELEASE', 'CEASE AIR'],
  'EMERGENCY STOP': ['IMMEDIATE STOP', 'FULL STOP', 'DANGER STOP', 'URGENT STOP', 'HALT NOW', 'STOP EMERGENCY'],
  'END MARSHALLING': ['MARSHALLING COMPLETE', 'FINISH GUIDANCE', 'STOP MARSHALLING', 'GUIDANCE DONE', 'MARSHALLING OFF', 'GUIDE COMPLETE'],
  'ENGINE FIRE': ['FIRE ALERT', 'ENGINE EMERGENCY', 'FIRE WARNING', 'FIRE DANGER', 'ENGINE ALARM', 'FIRE EMERGENCY'],
  'HOLD POSITION': ['STAY PUT', 'MAINTAIN POSITION', 'STOP HERE', 'REMAIN STILL', 'KEEP POSITION', 'STAY THERE'],
  'INSERT CHOCKS': ['CHOCKS IN', 'PLACE CHOCKS', 'WHEEL CHOCKS', 'PUT CHOCKS', 'INSTALL CHOCKS', 'SET CHOCKS'],
  'INSERT GROUND POWER': ['POWER ON', 'GROUND CONNECT', 'ELECTRICAL CONNECT', 'PLUG POWER', 'CONNECT POWER', 'GROUND ELECTRICAL'],
  'LEFT TURN': ['TURN LEFT', 'GO LEFT', 'LEFT DIRECTION', 'LEFT PIVOT', 'ROTATE LEFT', 'BEAR LEFT'],
  'NEGATIVE': ['NO GO', 'NOT CLEAR', 'STOP ACTION', 'NEGATIVE RESPONSE', 'NOT READY', 'NO PROCEED'],
  'NEXT MARSHALLER': ['CHANGE GUIDE', 'NEW MARSHALLER', 'SWITCH GUIDE', 'OTHER MARSHALLER', 'DIFFERENT GUIDE', 'ALTERNATE GUIDE'],
  'NORMAL STOP': ['REGULAR STOP', 'STANDARD STOP', 'ROUTINE STOP', 'NORMAL HALT', 'STANDARD HALT', 'TYPICAL STOP'],
  'RELEASE BRAKES': ['BRAKES OFF', 'FREE BRAKES', 'BRAKE RELEASE', 'UNLOCK BRAKES', 'DISENGAGE BRAKES', 'CLEAR BRAKES'],
  'REMOVE CHOCKS': ['CHOCKS OUT', 'PULL CHOCKS', 'CLEAR CHOCKS', 'TAKE CHOCKS', 'EXTRACT CHOCKS', 'WITHDRAW CHOCKS'],
  'REMOVE GROUND POWER': ['POWER OFF', 'DISCONNECT POWER', 'ELECTRICAL OFF', 'UNPLUG POWER', 'DETACH POWER', 'GROUND DISCONNECT'],
  'RIGHT TURN': ['TURN RIGHT', 'GO RIGHT', 'RIGHT DIRECTION', 'RIGHT PIVOT', 'ROTATE RIGHT', 'BEAR RIGHT'],
  'SET BRAKES': ['BRAKES ON', 'APPLY BRAKES', 'BRAKE SET', 'ENGAGE BRAKES', 'LOCK BRAKES', 'ACTIVATE BRAKES'],
  'SLOW DOWN': ['REDUCE SPEED', 'GO SLOWER', 'DECREASE SPEED', 'EASE SPEED', 'THROTTLE DOWN', 'SPEED REDUCTION'],
  'START ENGINE': ['ENGINE ON', 'BEGIN START', 'FIRE ENGINE', 'ENGINE START', 'POWER UP', 'IGNITE ENGINE'],
  'THIS MARSHALLER': ['CURRENT GUIDE', 'ME GUIDE', 'FOLLOW ME', 'THIS GUIDE', 'MY GUIDANCE', 'CURRENT MARSHAL'],
  'THUMBS UP': ['GOOD TO GO', 'ALL GOOD', 'OKAY SIGN', 'APPROVAL SIGN', 'POSITIVE SIGNAL', 'GO AHEAD']
};

export const generateQuizChoices = (correctAnswer: HandSignal, choiceCount: number, useDistractors = false, difficulty: string = 'easy'): HandSignal[] => {
  let incorrectChoices: HandSignal[] = [];
  
  if (useDistractors && choiceCount > 1) {
    let realChoicesCount: number;
    let distractorCount: number;
    let selectedDistractors: HandSignal[] = [];
    
    // Determine distribution based on difficulty
    if (difficulty === 'hard') {
      // Hard mode: 1-2 real signals, rest are distractors with at least 2 similar
      realChoicesCount = Math.min(2, Math.floor((choiceCount - 1) / 4));
      distractorCount = (choiceCount - 1) - realChoicesCount;
      
      // Get similar distractors for this signal
      const similarOptions = similarDistractors[correctAnswer.name] || [];
      const minSimilarCount = Math.min(2, Math.max(1, Math.floor(distractorCount * 0.6))); // At least 2, or 60% of distractors
      const actualSimilarCount = Math.min(minSimilarCount, similarOptions.length);
      
      // Select multiple similar distractors
      const shuffledSimilar = [...similarOptions].sort(() => Math.random() - 0.5);
      const guaranteedSimilar = shuffledSimilar.slice(0, actualSimilarCount);
      
      // Fill remaining distractor slots with random distractors
      const remainingDistractorCount = distractorCount - guaranteedSimilar.length;
      const shuffledDistractors = [...distractorAnswers].sort(() => Math.random() - 0.5);
      const additionalDistractors = shuffledDistractors.slice(0, remainingDistractorCount);
      
      selectedDistractors = [
        ...guaranteedSimilar.map((name, index) => ({
          id: `similar-distractor-${index}`,
          name,
          fileName: '',
          imagePath: ''
        })),
        ...additionalDistractors.map((name, index) => ({
          id: `distractor-${index}`,
          name,
          fileName: '',
          imagePath: ''
        }))
      ];
    } else {
      // Easy/Medium mode: Use half real signals, half random distractors
      realChoicesCount = Math.floor((choiceCount - 1) / 2);
      distractorCount = (choiceCount - 1) - realChoicesCount;
      
      const shuffledDistractors = [...distractorAnswers].sort(() => Math.random() - 0.5);
      selectedDistractors = shuffledDistractors.slice(0, distractorCount).map((name, index) => ({
        id: `distractor-${index}`,
        name,
        fileName: '',
        imagePath: ''
      }));
    }
    
    const realChoices = getRandomHandSignals(realChoicesCount, correctAnswer);
    incorrectChoices = [...realChoices, ...selectedDistractors];
  } else {
    incorrectChoices = getRandomHandSignals(choiceCount - 1, correctAnswer);
  }
  
  const allChoices = [correctAnswer, ...incorrectChoices];
  return allChoices.sort(() => Math.random() - 0.5);
};