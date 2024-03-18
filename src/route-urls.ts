export const MainUrl = {
  getHome: () => "/",
  getAbout: () => "/about",
  getContactUs: () => "/contact-us",
  getPrivacyPolicy: () => "/privacy-policy",
};

export const UserUrl = {
  _getRoot: () => "/user",
  getAccount: () => `${UserUrl._getRoot()}/account`,
  getSettings: () => `${UserUrl._getRoot()}/settings`,
  getApply: () => `${UserUrl._getRoot()}/apply`,
  getMyCompany: () => "/my-company",
};

export const ProtectedUrl = {
  getVacancies: () => "/vacancies",
  getApplicants: () => "/applicants",
};
