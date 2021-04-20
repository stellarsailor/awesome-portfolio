import React, { useContext, useEffect, useState } from "react"
import { Row, Col } from "react-grid-system"
import { Link, useParams } from "react-router-dom"
import Fade from "react-reveal/Fade"
import styled from "styled-components"
import { FlexDCol, FlexDRow } from "../components/StyledComponent"
import WorkTogether from "../components/WorkTogether"
import CircleIndicator from "../components/CircleIndicator"
import { projects } from "../data/projects"
import { LanguageContext } from "../store/LanguageProvider"

export default function ProjectDetail(props) {
  const [state] = useContext(LanguageContext)
  let { title } = useParams()

  const [selectedPrj, setSelectedPrj] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    setSelectedPrj(projects.filter((v) => v.title === title)[0])
  }, [title])

  return (
    <Fade bottom distance="50px">
      <Row nogutter justify="center">
        {selectedPrj !== null && (
          <Col sm={12} md={10} lg={8} style={{ padding: "1rem" }}>
            <CircleIndicator />
            <BackToProjectList>
              <Link to={`/projects?s=${selectedPrj.id}`}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="/images/more.png"
                    width={20}
                    style={{ transform: "rotate(180deg)", marginRight: 4 }}
                    alt="Go Back Button"
                  />{" "}
                  Back
                </div>
              </Link>
            </BackToProjectList>
            <Divider />
            <FlexDRow style={{ marginTop: 16 }}>
              <img
                src={`/images/projects/${selectedPrj.title}/icon.png`}
                width={140}
                height={140}
                style={{ borderRadius: 15, marginRight: 16 }}
                alt="Project Icon"
              />
              <FlexDCol>
                <div style={{ fontWeight: 800, fontSize: 24 }}>{title} {state.language}</div>
                <div>Minsu Lee</div>
                <div style={{ marginTop: 8 }}>
                  {selectedPrj.codeLink ? (
                    <HyperLink
                      href={selectedPrj.codeLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      CODE{" "}
                    </HyperLink>
                  ) : (
                    <span style={{ color: "var(--mono-3)" }}> CODE </span>
                  )}
                  <span style={{ margin: "0px 4px" }}> | </span>
                  {selectedPrj.liveLink ? (
                    <HyperLink
                      href={selectedPrj.liveLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      LIVE{" "}
                    </HyperLink>
                  ) : (
                    <span style={{ color: "var(--mono-3)" }}> LIVE </span>
                  )}
                  {selectedPrj.mobileApp && selectedPrj.googleLink ? (
                    <>
                      <span style={{ margin: "0px 4px" }}> | </span>
                      <HyperLink
                        href={selectedPrj.googleLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        Google Play{" "}
                      </HyperLink>
                    </>
                  ) : (
                    <></>
                  )}
                  {selectedPrj.mobileApp && selectedPrj.appleLink ? (
                    <>
                      <span style={{ margin: "0px 4px" }}> | </span>
                      <HyperLink
                        href={selectedPrj.appleLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        App Store{" "}
                      </HyperLink>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </FlexDCol>
            </FlexDRow>

            <Divider />
            <TabTitle>Information</TabTitle>

            <InfoLine>
              <InfoLeft>Type</InfoLeft>
              <InfoRight>{selectedPrj.type}</InfoRight>
            </InfoLine>
            <InfoLine>
              <InfoLeft>Language</InfoLeft>
              <InfoRight>{selectedPrj.languages}</InfoRight>
            </InfoLine>
            <InfoLine>
              <InfoLeft>Duration</InfoLeft>
              <InfoRight>
                {selectedPrj.duration} &nbsp; ({selectedPrj.year})
              </InfoRight>
            </InfoLine>
            {selectedPrj.timespent && (
              <InfoLine>
                <InfoLeft>Time Spent</InfoLeft>
                <InfoRight>{selectedPrj.timespent} hrs</InfoRight>
              </InfoLine>
            )}
            <InfoLine>
              <InfoLeft>Stack</InfoLeft>
              <InfoRight>
                {selectedPrj.stack.toString().replace(/,/g, " + ")}
              </InfoRight>
            </InfoLine>
            {selectedPrj.feature && (
              <InfoLine>
                <InfoLeft>Features</InfoLeft>
                <InfoRight>
                  {selectedPrj.feature.toString().replace(/,/g, " / ")}
                </InfoRight>
              </InfoLine>
            )}
            {selectedPrj.library && (
              <InfoLine>
                <InfoLeft>Library List</InfoLeft>
                <InfoRight>
                  <a
                    href={selectedPrj.library}
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Detail{" "}
                    <img
                      src="/images/blank.png"
                      width={15}
                      height={15}
                      alt="See Detail"
                    />
                  </a>
                </InfoRight>
              </InfoLine>
            )}
            {selectedPrj.profit && (
              <InfoLine>
                <InfoLeft>Profit</InfoLeft>
                <InfoRight>{selectedPrj.profit}</InfoRight>
              </InfoLine>
            )}
            {selectedPrj.result && (
              <InfoLine>
                <InfoLeft>Result</InfoLeft>
                <InfoRight>{selectedPrj.result}</InfoRight>
              </InfoLine>
            )}

            <Divider />
            <TabTitle>Initial Idea</TabTitle>
            <TextContainer>{selectedPrj.idea}</TextContainer>

            {selectedPrj.explanation && (
              <>
                <Divider />
                <TabTitle>Stack Explanation</TabTitle>
                <TextContainer>{selectedPrj.explanation}</TextContainer>
              </>
            )}

            <Divider />
            <TabTitle>Preview</TabTitle>
            <Row nogutter justify="center">
              {selectedPrj.preview.map((v, index) => (
                <Col
                  sm={12}
                  md={12}
                  style={{ padding: 8, marginBottom: "1rem" }}
                  key={v.name + index}
                >
                  <Fade bottom distance="50px">
                    <>
                      {v.type === "mp4" ? (
                        v.flex === "full" ? (
                          <video
                            controls
                            loop
                            autoPlay
                            playsInline
                            muted
                            src={`/images/projects/${selectedPrj.title}/${v.name}.${v.type}`}
                            type="video/mp4"
                            style={{ width: "100%" }}
                            key={v.name}
                          />
                        ) : (
                          <video
                            controls
                            loop
                            autoPlay
                            playsInline
                            muted
                            src={`/images/projects/${selectedPrj.title}/${v.name}.${v.type}`}
                            type="video/mp4"
                            style={{
                              maxHeight: "80vh",
                              display: "block",
                              marginLeft: "auto",
                              marginRight: "auto",
                              width: "auto",
                              marginBottom: "1rem",
                            }}
                            key={v.name}
                          />
                        )
                      ) : v.flex === "full" ? (
                        <img
                          src={`/images/projects/${selectedPrj.title}/${v.name}.${v.type}`}
                          style={{ width: "100%" }}
                          key={v.name}
                          alt="Project Detail"
                        />
                      ) : (
                        <img
                          src={`/images/projects/${selectedPrj.title}/${v.name}.${v.type}`}
                          style={{
                            maxHeight: "90vh",
                            display: "block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            width: "auto",
                            maxWidth: "100%",
                          }}
                          key={v.name}
                          alt="Project Detail"
                        />
                      )}
                      {v.comment && (
                        <CommentOnImage>{v.comment}</CommentOnImage>
                      )}
                    </>
                  </Fade>
                </Col>
              ))}
            </Row>

            {selectedPrj.lesson && (
              <>
                <Divider />
                <TabTitle>Lessons Learned</TabTitle>
                <TextContainer>{selectedPrj.lesson}</TextContainer>
              </>
            )}

            {selectedPrj.id + 1 < projects.length ? (
              <WorkTogether
                linkTo={`/project/${projects[selectedPrj.id + 1].title}`}
                smallText={projects[selectedPrj.id + 1].title}
                bigText="See Next Project"
              />
            ) : (
              <WorkTogether
                linkTo={`/about`}
                smallText=""
                bigText="Read About Me"
              />
            )}
          </Col>
        )}
      </Row>
    </Fade>
  )
}

const BackToProjectList = styled.div`
  /* color: var(--blue); */
  font-size: 1.8rem;
  font-weight: 800;
  display: flex;
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`

const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--mono-3);
  margin: 16px 0px;
`

const TabTitle = styled.div`
  font-size: 24px;
  margin-top: 16px;
  font-weight: 800;
`

const InfoLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 8px;
`

const InfoLeft = styled.div`
  width: 150px;
  text-align: right;
  color: var(--mono-6);
`

const InfoRight = styled.div`
  width: 100%;
  margin-left: 16px;
  text-align: left;
  color: var(--mono-6);
`

const TextContainer = styled.div`
  color: var(--mono-6);
  margin-top: 1rem;
  margin-bottom: 2rem;
`

const HyperLink = styled.a`
  color: var(--blue);
  &:visited {
    color: var(--blue);
  }
`

const CommentOnImage = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mono-5);
  margin-bottom: 1rem;
`
