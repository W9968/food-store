export let name_regex: RegExp = /([a-zA-Z]{3,30}\s*)+/
export let mail_regex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
export let pass_regex: RegExp =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
