/**
 * Model representing a Project in the portfolio.
 */
export class Project {
  /**
   * Create a project.
   * @param {Object} data - The project data object.
   * @param {string} data.title - The title of the project.
   * @param {string} data.description - The project description.
   * @param {string} data.category - The category group.
   * @param {string} data.imgUrl - The primary image preview URL.
   * @param {string[]} [data.images] - An array of preview images.
   * @param {string} [data.videoUrl] - An optional video presentation URL.
   * @param {string} [data.githubUrl] - An optional repository URL.
   */
  constructor({ title, description, category, imgUrl, images = null, videoUrl = "", githubUrl = "" }) {
    this.title = title;
    this.description = description;
    this.category = category;
    this.imgUrl = imgUrl;
    this.images = images;
    this.videoUrl = videoUrl;
    this.githubUrl = githubUrl;
  }

  /**
   * Check if the project contains interactive media (video or slider gallery).
   * @returns {boolean} True if interactive, false otherwise.
   */
  hasInteractiveMedia() {
    return !!(this.videoUrl || (this.images && this.images.length > 0));
  }
}
