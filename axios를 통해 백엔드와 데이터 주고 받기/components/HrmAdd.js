export default {
  template: `
  <div id="app" align="center">

  <h2 style="color: cornflowerblue">SSAFY HRM ADD EMPLOEE</h2>
  <table class="table table-striped table-bordered table-hover">
    <thead style="background-color: blue; color: white"></thead>
    <tbody>
      <tr>
        <td width="200">아이디</td>
        <td><input type="" v-model="id" /></td>
      </tr>
      <tr>
        <td width="200">이름</td>
        <td><input type="" v-model="name" /></td>
      </tr>
      <tr>
        <td>이메일</td>
        <td><input type="" v-model="mailid" /></td>
      </tr>
      <tr>
        <td>고용일</td>
        <td><input type="date" v-model="start_date" /></td>
      </tr>
      <tr>
        <td>관리자</td>
        <td><input type="" v-model="manager_id" /></td>
      </tr>
      <tr>
        <td>직책</td>
        <td>
          <select name="title" v-model="title">
            <option value="" selected>선택</option>
            <option value="사장">사장</option>
            <option value="기획부장">기획부장</option>
            <option value="영업부장">영업부장</option>
            <option value="총무부장">총무부장</option>
            <option value="인사부장">인사부장</option>
            <option value="과장">과장</option>
            <option value="영업대표이사">영업대표이사</option>
            <option value="사원">사원</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>부서</td>
        <td><input type="" v-model="dept_id" /></td>
      </tr>
      <tr>
        <td>월급</td>
        <td><input type="" v-model="salary" /></td>
      </tr>
      <tr>
        <td>커미션</td>
        <td><input type="number" v-model="commission_pct" /></td>
      </tr>
    </tbody>
  </table>
  <button @click="checkVal">사원추가</button>
  <a :href="'hrm_list.html'"><button v-on:click>목록</button></a>
</div>
    `,
  data() {
    return {
      id: "",
      name: "",
      mailid: "",
      start_date: "",
      manager_id: "",
      title: "",
      dept_id: "",
      salary: "",
      commission_pct: "",
      emp: [],
    };
  },
  methods: {
    checkVal() {
      if (!this.name) {
        alert("이름 입력!");
      } else if (!this.mailid) {
        alert("이메일 입력!");
      } else if (!this.start_date) {
        alert("고용일 입력!");
      } else if (!this.manager_id) {
        alert("관리자 입력!");
      } else if (!this.dept_id) {
        alert("부서 입력!");
      } else if (!this.salary) {
        alert("월급 입력!");
      } else {
        this.register();
      }
    },
    register() {
      //const emplist = localStorage.getItem("emplist");
     
        

   

      this.emp.push({
        id: this.id,
        name: this.name,
        mailid: this.mailid,
        start_date: this.start_date,
        manager_id:this.manager_id,
        title: this.title,
        dept_id: this.dept_id,
        salary: this.salary,
        commission_pct: this.commission_pct,
      });

      //localStorage.setItem("emplist", JSON.stringify(this.newEmps));
      const addr = "http://localhost:8097/hrmboot/api/employee";
      axios
        .post(addr, {
          id: this.id,
          name: this.name,
          mailid: this.mailid,
          start_date: this.start_date,
          manager_id:this.manager_id,
          title: this.title,
          dept_id: this.dept_id,
          salary: this.salary,
          commission_pct: this.commission_pct,
        })
        .then(res => { console.log(res.data) })
        .catch((error) => {
        console.dir(error);
      });


      alert("등록이 완료되었습니다.");
    },
  },
};

