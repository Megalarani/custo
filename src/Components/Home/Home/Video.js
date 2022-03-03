const Video = (props) => {
  return (
    <section class="videocover">
      <div class="row m-0">
        <div class="video col-sm-9 col-md-7">
          <iframe src={props.school.video}></iframe>;
        </div>
      </div>
    </section>
  );
};

export default Video;
