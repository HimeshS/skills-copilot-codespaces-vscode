function skillsMember() {
  return {
    skills: ['Javascript', 'React', 'Node', 'Express', 'MongoDB'],
    addSkill: function(skill) {
      this.skills.push(skill);
    },
    removeSkill: function(skill) {
      this.skills = this.skills.filter((s) => s !== skill);
    },
  };
}