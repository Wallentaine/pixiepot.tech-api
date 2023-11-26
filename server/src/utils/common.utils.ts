class Common {
  public calculateDiffDays(date: Date) {
    const lastUpGradeDate = new Date(date);
    const currentDate = new Date();

    const timeDiff: number = currentDate.getTime() - lastUpGradeDate.getTime();

    return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  }
}

export default new Common();
