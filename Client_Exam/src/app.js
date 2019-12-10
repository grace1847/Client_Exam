export class App {
    configureRouter(config, router) {
      this.router = router;
      config.title = 'Widget World';
      config.map([
        {
          route: ['', 'home'],
          name: 'home',
          moduleId: 'modules/home',
          title: 'Home'
        },
        {
          route: 'widgets',
          name: 'widgets',
          moduleId: 'modules/widgets',
          title: 'Widgets'
        }
      ]);
    }
  }