export function getStudentsApi(user) {
    return "/api/students";
  }
  export function getStudentApi(id) {
    return `/api/students/${id}`;
  }
  export function getItemsApi(itemType) {
    return `/api/items/${itemType}`;
  }
  
  export function getItemApi(itemType, id) {
    return `/api/items/${itemType}/${id}`;
  }
  export function addItemApi() {
    return "/api/add-item";
  }
  export function deleteItemApi() {
    return "/api/delete-item";
  }
  export function addCustomStudentItemsApi() {
    return "/api/add-custom-item";
  }
  
  export function addStudentItemsApi() {
    return "/api/add-new-items-to-students";
  }
  
  export function getUnassignedItemsApi(id, itemType) {
    return `/api/unassigned-items/${id}/${itemType}`;
  }
  export function assignCustomStudentItemsApi() {
    return "/api/add-custom-items-to-student";
  }
  
  export function getUnassignedStudentsApi(id) {
      return `/api/unassigned-students/${id}`;
  }
    
  export function addItemStudentsApi() {
      return "/api/add-student-to-item";
  }
   
  export function getReadingLevelApi() {
      return "/api/reading-levels";
  }
  export function getStudentReadingLevelsApi() {
      return "/api/students/reading-levels";
  }
  export function assignReadingLevelApi(studentId) {
      return `/api/students/${studentId}/reading-level`;
  }
  
  
  // Group actions
  export function assignGroupApi() {
      return "/api/assign-group";
  }
    
  export function addGroupApi() {
      return "/api/add-group";
  }
  
  export function fetchGroupsApi() {
      return "/api/all-groups";
  }
  export function fetchGroupApi(group) {
      return `/api/group-detail/${group}`;
  }
  export function deleteGroupApi() {
      return "/api/delete-group";
  }
  
  export function addNoteApi() {
      return `/api/add-note`;
  }
  
  export function deleteNoteApi() {
      return "/api/delete-note";
  }
  
  // Auth Actions
  export function getUserApi() {
      return "/auth/login";
  }
  
  export function requestResetPasswordApi() {
      return "/auth/request-reset-password";
  }
  export function resetPasswordApi() {
      return "/auth/reset-password";
  }