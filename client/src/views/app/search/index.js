import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Row, Nav, NavItem, TabContent, TabPane } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import { Colxx } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import QuestionBuilder from '../../../containers/applications/QuestionBuilder';
// import {
//   getSurveyDetail,
//   deleteSurveyQuestion,
//   saveSurvey,
// } from '../../../redux/actions';
import SurveyQuotas from '../../../containers/applications/SurveyQuotas';
import SurveyCharts from '../../../containers/applications/SurveyCharts';
// import SurveyDetailApplicationMenu from '../../../containers/applications/SurveyDetailApplicationMenu';
// import SurveyDetailCard from '../../../components/applications/SurveyDetailCard';

const SurveyDetailApp = ({ match }) => {
  const loading = true;
  const survey = {
    title: 'Developer Survey',
    detail:
      "As a software professional, you are an innovator, problem solver, researcher, and a creative. Your job is to take big ideas and make them a reality. With the right support, the possibilities are endless.<br/><br/>When roadblocks are removed and you're allowed do your best work, you change the world.",
    category: 'Development',
    createDate: '22.09.2018',
    status: 'ACTIVE',
    label: 'EDUCATION',
    labelColor: 'secondary',
    id: 2,
    questions: [
      {
        id: 0,
        title: 'Name',
        question: 'What is your name?',
        answerType: 1,
      },
      {
        id: 1,
        title: 'Age',
        question: 'How old are you?',
        answerType: 3,
        answers: [
          {
            id: 0,
            label: '18-24',
          },
          {
            id: 1,
            label: '24-30',
          },
          {
            id: 2,
            label: '30-40',
          },
          {
            id: 3,
            label: '40-50',
          },
          {
            id: 4,
            label: '50+',
          },
        ],
      },
      {
        id: 2,
        title: 'Gender',
        question: 'What is your gender?',
        answerType: 3,
        answers: [
          {
            id: 0,
            label: 'Male',
          },
          {
            id: 1,
            label: 'Female',
          },
          {
            id: 2,
            label: 'Other',
          },
        ],
      },
      {
        id: 3,
        title: 'Work',
        question: 'What is your employment status?',
        answerType: 3,
        answers: [
          {
            id: 0,
            label: 'Employed for wages',
          },
          {
            id: 1,
            label: 'Self-employed',
          },
          {
            id: 2,
            label: 'Out of work and looking for work',
          },
          {
            id: 3,
            label: 'Retired',
          },
        ],
      },
      {
        id: 4,
        title: 'Coding',
        question: 'What programming languages do you use?',
        answerType: 2,
        answers: [
          {
            id: 0,
            label: 'Python',
          },
          {
            id: 1,
            label: 'JavaScript',
          },
          {
            id: 2,
            label: 'PHP',
          },
          {
            id: 3,
            label: 'Java',
          },
          {
            id: 4,
            label: 'C#',
          },
        ],
      },
    ],
  };
  const [activeTab, setActiveTab] = useState('details');

  useEffect(() => {
    document.body.classList.add('right-menu');

    return () => {
      document.body.classList.remove('right-menu');
    };
  }, []);

  return (
    <>
      <Row className="app-row survey-app">
        <Colxx xxs="12">
          <h1>
            <span className="align-middle d-inline-block pt-1">
              Developer Search
            </span>
          </h1>

          <Breadcrumb match={match} />
          {loading ? (
            <>
              <Nav tabs className="separator-tabs ml-0 mb-5">
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: activeTab === 'details',
                      'nav-link': true,
                    })}
                    location={{}}
                    to="#"
                    onClick={() => setActiveTab('details')}
                  >
                    DETAILS
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    location={{}}
                    to="#"
                    className={classnames({
                      active: activeTab === 'results',
                      'nav-link': true,
                    })}
                    onClick={() => setActiveTab('results')}
                  >
                    RESULTS
                  </NavLink>
                </NavItem>
              </Nav>

              <TabContent activeTab={activeTab}>
                <TabPane tabId="details">
                  <Row>
                    <Colxx xxs="12" lg="8">
                      <ul className="list-unstyled mb-4">
                        {survey.questions.map((item, index) => {
                          return (
                            <li data-id={item.id} key={item.id}>
                              <QuestionBuilder
                                order={index}
                                {...item}
                                expanded={!item.title && true}
                                deleteClick={(id) => {}}
                              />
                            </li>
                          );
                        })}
                      </ul>
                    </Colxx>
                  </Row>
                </TabPane>
                <TabPane tabId="results">
                  <Row>
                    <SurveyQuotas />
                    <SurveyCharts />
                  </Row>
                </TabPane>
              </TabContent>
            </>
          ) : (
            <div className="loading" />
          )}
        </Colxx>
      </Row>
    </>
  );
};

const mapStateToProps = ({ surveyDetailApp }) => {
  return {};
};
export default connect(mapStateToProps, {
  getSurveyDetailAction: () => ({}),
  deleteSurveyQuestionAction: () => ({}),
  saveSurveyAction: () => ({}),
})(SurveyDetailApp);
