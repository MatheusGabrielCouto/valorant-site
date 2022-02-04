export default interface Agent {
  uuid: string,
  displayName: string,
  description: string,
  displayIcon: string,
  displayIconSmall: string,
  bustPortrait: string,
  fullPortrait: string,
  role: {
    description: string,
    displayIcon: string,
    displayName: string
  },
  abilities: [
    {
      description: string,
      displayIcon: string,
      displayName: string,
      slot: string
    }
  ],
  voiceLine: {
    mediaList: [
      {
        wave: string
      }
    ]
  }
}