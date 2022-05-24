import { rest } from 'msw'

if (!localStorage.getItem('forms')) {
  localStorage.setItem(
    'forms',
    JSON.stringify([
      {
        id: 1,
        title: 'Basic Info',
        questions: [
          {
            id: 1,
            text: 'What is your name?',
          },
          {
            id: 2,
            text: 'Where are you from?',
          },
          {
            id: 3,
            text: 'What is your occupation?',
          },
        ],
      },
      {
        id: 2,
        title: 'Favorites',
        questions: [
          {
            id: 1,
            text: 'Whats your favorite color?',
          },
          {
            id: 2,
            text: 'What is your favorite book?',
          },
          {
            id: 3,
            text: 'What is your favorite movie?',
          },
        ],
      },
    ]),
  )
}

if (!localStorage.getItem('personal')) {
  localStorage.setItem(
    'personal',
    JSON.stringify([
      {
        id: 1,
        title: 'Basic Info',
        questions: [
          {
            id: 1,
            text: 'What is your name?',
          },
          {
            id: 2,
            text: 'Where are you from?',
          },
          {
            id: 3,
            text: 'What is your occupation?',
          },
        ],
      },
      {
        id: 2,
        title: 'Favorites',
        questions: [
          {
            id: 1,
            text: 'Whats your favorite color?',
          },
          {
            id: 2,
            text: 'What is your favorite book?',
          },
          {
            id: 3,
            text: 'What is your favorite movie?',
          },
        ],
      },
    ]),
  )
}
if (!localStorage.getItem('document')) {
  localStorage.setItem(
    'document',
    JSON.stringify([
      {
        id: 1,
        title: 'Basic Info',
        questions: [
          {
            id: 1,
            text: 'What is your name?',
          },
          {
            id: 2,
            text: 'Where are you from?',
          },
          {
            id: 3,
            text: 'What is your occupation?',
          },
        ],
      },
      {
        id: 2,
        title: 'Favorites',
        questions: [
          {
            id: 1,
            text: 'Whats your favorite color?',
          },
          {
            id: 2,
            text: 'What is your favorite book?',
          },
          {
            id: 3,
            text: 'What is your favorite movie?',
          },
        ],
      },
    ]),
  )
}

if (!localStorage.getItem('job')) {
  localStorage.setItem(
    'job',
    JSON.stringify([
      {
        id: 1,
        title: 'Basic Info',
        questions: [
          {
            id: 1,
            text: 'What is your name?',
          },
          {
            id: 2,
            text: 'Where are you from?',
          },
          {
            id: 3,
            text: 'What is your occupation?',
          },
        ],
      },
      {
        id: 2,
        title: 'Favorites',
        questions: [
          {
            id: 1,
            text: 'Whats your favorite color?',
          },
          {
            id: 2,
            text: 'What is your favorite book?',
          },
          {
            id: 3,
            text: 'What is your favorite movie?',
          },
        ],
      },
    ]),
  )
}

if (!localStorage.getItem('users')) {
  localStorage.setItem(
    'users',
    JSON.stringify([
      {
        id: 1,
        name: 'John',
        occupation: 'Developer',
        address: {
          streetAddress: '',
          apt: '',
          city: '',
          state: '',
          zipcode: '',
        },
        hobbies: [
          {
            id: 1,
            hobby: 'scrolling Instagram',
          },
        ],
      },
    ]),
  )
}

if (!localStorage.getItem('employment')) {
  localStorage.setItem(
    'employment',
    JSON.stringify([
      {
        id: 1,
        name: 'John',
        occupation: 'Developer',
        address: {
          streetAddress: '',
          apt: '',
          city: '',
          state: '',
          zipcode: '',
        },
        hobbies: [
          {
            id: 1,
            hobby: 'scrolling Instagram',
          },
        ],
      },
    ]),
  )
}

const getUsers = () => {
  let users = localStorage.getItem('users')
  return JSON.parse(users)
}

const getForms = () => {
  let forms = localStorage.getItem('forms')
  return JSON.parse(forms)
}

const getPersonal = () => {
  let personal = localStorage.getItem('personal')
  return JSON.parse(personal)
}

const getDocument = () => {
  let document = localStorage.getItem('document')
  return JSON.parse(document)
}

const getEducation = () => {
  let education = localStorage.getItem('education')
  return JSON.parse(education)
}

const getEmployment = () => {
  let employment = localStorage.getItem('employment')
  return JSON.parse(employment)
}

const getJob = () => {
  let job = localStorage.getItem('job')
  return JSON.parse(job)
}

export const handlers = [
  rest.get('/employment', (req, res, ctx) => {
    let employment = getEmployment()
    return res(
      ctx.status(200),
      ctx.set('content-range', employment.length),
      ctx.json(employment),
    )
  }),
  rest.get('/employment/:id', async (req, res, ctx) => {
    let employment = getEmployment()
    let { id } = req.params

    const match = await employment.find((ques) => ques.id == id)

    return res(ctx.status(200), ctx.json(match))
  }),
  rest.post('/employment', (req, res, ctx) => {
    let employment = getEmployment()
    const newForm = req.body
    const newFormArray = [...employment, newForm]

    localStorage.setItem('employment', JSON.stringify(newFormArray))
    return res(ctx.status(201), ctx.json(newForm))
  }),
  rest.put('/employment/:id', async (req, res, ctx) => {
    let employment = getEmployment()
    const { id } = req.params
    const updatedForm = req.body
    const index = await employment.findIndex((form) => form.id === Number(id))
    const oldForm = employment[index]

    const newForm = { ...oldForm, ...updatedForm }
    employment.splice(index, 1, newForm)
    localStorage.setItem('employment', JSON.stringify(employment))

    return res(ctx.status(202), ctx.json(newForm))
  }),
  rest.delete('/employment/:id', async (req, res, ctx) => {
    let employment = getEmployment()
    const { id } = req.params
    const newFormArray = await employment.filter((ques) => ques.id != id)

    localStorage.setItem('employment', JSON.stringify(newFormArray))

    return res(
      ctx.status(202),
      ctx.json({
        id,
      }),
    )
  }),

  rest.get('/document', (req, res, ctx) => {
    let document = getDocument()
    return res(
      ctx.status(200),
      ctx.set('content-range', document.length),
      ctx.json(document),
    )
  }),
  rest.get('/document/:id', async (req, res, ctx) => {
    let document = getDocument()
    let { id } = req.params

    const match = await document.find((ques) => ques.id == id)

    return res(ctx.status(200), ctx.json(match))
  }),
  rest.post('/document', (req, res, ctx) => {
    let document = getDocument()
    const newForm = req.body
    const newFormArray = [...document, newForm]

    localStorage.setItem('document', JSON.stringify(newFormArray))
    return res(ctx.status(201), ctx.json(newForm))
  }),
  rest.put('/document/:id', async (req, res, ctx) => {
    let document = getDocument()
    const { id } = req.params
    const updatedForm = req.body
    const index = await document.findIndex((form) => form.id === Number(id))
    const oldForm = document[index]

    const newForm = { ...oldForm, ...updatedForm }
    document.splice(index, 1, newForm)
    localStorage.setItem('document', JSON.stringify(document))

    return res(ctx.status(202), ctx.json(newForm))
  }),
  rest.delete('/document/:id', async (req, res, ctx) => {
    let document = getDocument()
    const { id } = req.params
    const newFormArray = await document.filter((ques) => ques.id != id)

    localStorage.setItem('document', JSON.stringify(newFormArray))

    return res(
      ctx.status(202),
      ctx.json({
        id,
      }),
    )
  }),

  rest.get('/personal', (req, res, ctx) => {
    let personal = getPersonal()
    return res(
      ctx.status(200),
      ctx.set('content-range', personal.length),
      ctx.json(personal),
    )
  }),
  rest.get('/personal/:id', async (req, res, ctx) => {
    let personal = getPersonal()
    let { id } = req.params

    const match = await personal.find((ques) => ques.id == id)

    return res(ctx.status(200), ctx.json(match))
  }),
  rest.post('/personal', (req, res, ctx) => {
    let personal = getPersonal()
    const newForm = req.body
    const newFormArray = [...personal, newForm]

    localStorage.setItem('personal', JSON.stringify(newFormArray))
    return res(ctx.status(201), ctx.json(newForm))
  }),
  rest.put('/personal/:id', async (req, res, ctx) => {
    let personal = getPersonal()
    const { id } = req.params
    const updatedForm = req.body
    const index = await personal.findIndex((form) => form.id === Number(id))
    const oldForm = personal[index]

    const newForm = { ...oldForm, ...updatedForm }
    personal.splice(index, 1, newForm)
    localStorage.setItem('personal', JSON.stringify(personal))

    return res(ctx.status(202), ctx.json(newForm))
  }),
  rest.delete('/personal/:id', async (req, res, ctx) => {
    let personal = getPersonal()
    const { id } = req.params
    const newFormArray = await personal.filter((ques) => ques.id != id)

    localStorage.setItem('personal', JSON.stringify(newFormArray))

    return res(
      ctx.status(202),
      ctx.json({
        id,
      }),
    )
  }),

  rest.get('/forms', (req, res, ctx) => {
    let forms = getForms()
    return res(
      ctx.status(200),
      ctx.set('content-range', forms.length),
      ctx.json(forms),
    )
  }),
  rest.get('/forms/:id', async (req, res, ctx) => {
    let forms = getForms()
    let { id } = req.params

    const match = await forms.find((ques) => ques.id == id)

    return res(ctx.status(200), ctx.json(match))
  }),
  rest.post('/forms', (req, res, ctx) => {
    let forms = getForms()
    const newForm = req.body
    const newFormArray = [...forms, newForm]

    localStorage.setItem('forms', JSON.stringify(newFormArray))
    return res(ctx.status(201), ctx.json(newForm))
  }),
  rest.put('/forms/:id', async (req, res, ctx) => {
    let forms = getForms()
    const { id } = req.params
    const updatedForm = req.body
    const index = await forms.findIndex((form) => form.id === Number(id))
    const oldForm = forms[index]

    const newForm = { ...oldForm, ...updatedForm }
    forms.splice(index, 1, newForm)
    localStorage.setItem('forms', JSON.stringify(forms))

    return res(ctx.status(202), ctx.json(newForm))
  }),
  rest.delete('/forms/:id', async (req, res, ctx) => {
    let forms = getForms()
    const { id } = req.params
    const newFormArray = await forms.filter((ques) => ques.id != id)

    localStorage.setItem('forms', JSON.stringify(newFormArray))

    return res(
      ctx.status(202),
      ctx.json({
        id,
      }),
    )
  }),
  rest.get('/users', (req, res, ctx) => {
    let users = getUsers()
    return res(
      ctx.status(200),
      ctx.set('content-range', users.length),
      ctx.json(users),
    )
  }),
  rest.get('/users/:id', async (req, res, ctx) => {
    let users = getUsers()
    let { id } = req.params

    const match = await users.find((ques) => ques.id == id)

    return res(ctx.status(200), ctx.json(match))
  }),
  rest.post('/users', (req, res, ctx) => {
    let users = getUsers()
    const newForm = req.body
    const newFormArray = [...users, newForm]

    localStorage.setItem('users', JSON.stringify(newFormArray))
    return res(ctx.status(201), ctx.json(newForm))
  }),
  rest.put('/users/:id', async (req, res, ctx) => {
    let users = getUsers()
    const { id } = req.params
    const updatedForm = req.body
    const index = await users.findIndex((form) => form.id === Number(id))
    const oldForm = users[index]

    const newForm = { ...oldForm, ...updatedForm }
    users.splice(index, 1, newForm)
    localStorage.setItem('users', JSON.stringify(users))

    return res(ctx.status(202), ctx.json(newForm))
  }),
  rest.delete('/users/:id', async (req, res, ctx) => {
    let users = getUsers()
    const { id } = req.params
    const newFormArray = await users.filter((ques) => ques.id != id)

    localStorage.setItem('users', JSON.stringify(newFormArray))

    return res(
      ctx.status(202),
      ctx.json({
        id,
      }),
    )
  }),

  rest.get('/education', (req, res, ctx) => {
    let education = getEducation()
    return res(
      ctx.status(200),
      ctx.set('content-range', education.length),
      ctx.json(education),
    )
  }),
  rest.get('/education/:id', async (req, res, ctx) => {
    let education = getEducation()
    let { id } = req.params

    const match = await education.find((ques) => ques.id == id)

    return res(ctx.status(200), ctx.json(match))
  }),
  rest.post('/education', (req, res, ctx) => {
    let education = getEducation()
    const newForm = req.body
    const newFormArray = [...education, newForm]

    localStorage.setItem('education', JSON.stringify(newFormArray))
    return res(ctx.status(201), ctx.json(newForm))
  }),
  rest.put('/education/:id', async (req, res, ctx) => {
    let education = getEducation()
    const { id } = req.params
    const updatedForm = req.body
    const index = await education.findIndex((form) => form.id === Number(id))
    const oldForm = education[index]

    const newForm = { ...oldForm, ...updatedForm }
    education.splice(index, 1, newForm)
    localStorage.setItem('education', JSON.stringify(education))

    return res(ctx.status(202), ctx.json(newForm))
  }),
  rest.delete('/education/:id', async (req, res, ctx) => {
    let education = getEducation()
    const { id } = req.params
    const newFormArray = await education.filter((ques) => ques.id != id)

    localStorage.setItem('education', JSON.stringify(newFormArray))

    return res(
      ctx.status(202),
      ctx.json({
        id,
      }),
    )
  }),

  rest.get('/job', (req, res, ctx) => {
    let job = getJob()
    return res(
      ctx.status(200),
      ctx.set('content-range', job.length),
      ctx.json(job),
    )
  }),
  rest.get('/job/:id', async (req, res, ctx) => {
    let job = getJob()
    let { id } = req.params

    const match = await job.find((ques) => ques.id == id)

    return res(ctx.status(200), ctx.json(match))
  }),
  rest.post('/job', (req, res, ctx) => {
    let job = getJob()
    const newForm = req.body
    const newFormArray = [...job, newForm]

    localStorage.setItem('job', JSON.stringify(newFormArray))
    return res(ctx.status(201), ctx.json(newForm))
  }),
  rest.put('/job/:id', async (req, res, ctx) => {
    let job = getJob()
    const { id } = req.params
    const updatedForm = req.body
    const index = await job.findIndex((form) => form.id === Number(id))
    const oldForm = job[index]

    const newForm = { ...oldForm, ...updatedForm }
    job.splice(index, 1, newForm)
    localStorage.setItem('job', JSON.stringify(job))

    return res(ctx.status(202), ctx.json(newForm))
  }),
  rest.delete('/job/:id', async (req, res, ctx) => {
    let job = getJob()
    const { id } = req.params
    const newFormArray = await job.filter((ques) => ques.id != id)

    localStorage.setItem('job', JSON.stringify(newFormArray))

    return res(
      ctx.status(202),
      ctx.json({
        id,
      }),
    )
  }),
]
