export default interface Weapon {
  uuid: string,
  displayName: string,
  displayIcon: string,
  weaponStats: object,
  category: string,
  skins: [
    {
      uuid: string,
      displayName: string,
      themeUuid: string,
      contentTierUuid: string,
      displayIcon: string,
      chromas: [
        {
          uuid: string,
          displayName: string,
          themeUuid: string,
          swatch: string,
          displayIcon: string,
          fullRender: string,
        }
      ],
      levels: [
        {
          uuid: string,
          displayName: string,
          displayIcon: string,
          streamedVideo: string,
        }
      ],
    }
  ]
}