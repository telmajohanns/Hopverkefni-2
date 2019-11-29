const LOCALSTORAGEKEY = 'completed_lectures';

export function loadSavedLectures() {
  const lecturesJson = localStorage.getItem(LOCALSTORAGEKEY);
  const lectures = JSON.parse(lecturesJson) || [];

  return lectures;
}

function removeSavedLecture(slug) {
  const lectures = loadSavedLectures();
  const index = lectures.indexOf(slug);

  if (index > -1) {
    lectures.splice(index, 1);
  }
  localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(lectures));
}


export function saveLecture(slug) {
  const lectures = loadSavedLectures();
  if (!lectures.includes(slug)) {
    lectures.push(slug);
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(lectures));
  } else {
    removeSavedLecture(slug);
  }
}


export function lectureCompleted(slug) {
  const lectures = loadSavedLectures();
  return lectures.includes(slug);
}
