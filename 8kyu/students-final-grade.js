// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

function finalGrade (exam, projects) {
    if(exam > 90 || projects > 10) return 100; 
    else if(exam > 75 && projects >= 5) return 90; 
    else if(exam > 50 && projects >= 2) return 75; 
    return 0;
  }
<template>
  <Child :childData="parentData" @childEvent="handleChildEvent"></Child>
</template>

<script>
export default {
  components: {
    childComponent
  },
  data() {
    return {
      parentData: 'data'
    };
  },
  methods: {
    handleChildEvent(data) {
        console.log('here is the', data)
    }
  }
}
</script>



  <template>
    <button @onClick="sendToParent"></button>
  </template>

  <script>
    //import child from './child.js'
    export default {
      props: {
        childProp: {
          type: string, 
          required: true
        }
      },
      methods: {
        sendToParent(){
          this.$emit('childEvent', 'Date sent from child')
        }
      }
    }
  </script>
  