function countVotes(votes) {
    let map = new Map();
    for (const [vote,party] of votes) {
        if (!map.has(party)) {
            map.set(party,[vote,1])
        }
        if (map.has(party)) {
            let x = map.get(party)
            if (x[0]!==vote) {
                x[1]=x[1]+1
            }
        }
    }
    console.log(map)
    }

let votes = [
    [ '12678345', 'BJP' ],
    [ '57891082', 'Congress' ],
    [ '12678345', 'AAP' ],
    [ '65489', 'TMC' ]
  ];
  countVotes(votes)