import {build} from 'aurelia-cli';
import gulp from 'gulp';
import project from '../aurelia.json';

export default function processMarkup() {
  return gulp.src(project.markupProcessor.source, {sourcemaps: true, since: gulp.lastRun(processMarkup)})
    .pipe(build.bundle());
}
